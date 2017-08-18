
/*
Code generated with Faust version 2.3.8
Compilation options: -scal -ftz 0
*/

function getSizenoise() {
	return 16;
}

function getPathTablenoise() {
	var pathTable = [];
	pathTable["/Noise/Volume"] = 0;
	return pathTable;
}

function getJSONnoise() {
	return "{  \"name\": \"Noise\",  \"inputs\": \"0\",  \"outputs\": \"1\",  \"meta\": [    { \"author\": \"Grame\" },   { \"copyright\": \"(c)GRAME 2009\" },   { \"license\": \"BSD\" },   { \"name\": \"Noise\" },   { \"version\": \"1.1\" }  ],  \"ui\": [    {    \"type\": \"vgroup\",    \"label\": \"Noise\",    \"items\": [      {      \"type\": \"vslider\",      \"label\": \"Volume\",      \"address\": \"/Noise/Volume\",      \"meta\": [       { \"acc\": \"0 0 -10 0 10\" },       { \"style\": \"knob\" }      ],      \"init\": \"0.5\",      \"min\": \"0\",      \"max\": \"1\",      \"step\": \"0.1\"     }    ]   }  ] } ";
}

function metadatanoise(m) {
	m.declare("author", "Grame");
	m.declare("copyright", "(c)GRAME 2009");
	m.declare("license", "BSD");
	m.declare("name", "Noise");
	m.declare("version", "1.1");
}

/*
 faust2webaudio
 
 Primarily written by Myles Borins
 During the Spring 2013 offering of Music 420b with Julius Smith
 A bit during the Summer of 2013 with the help of Joshua Kit Clayton
 And finally a sprint during the late fall of 2013 to get everything working
 A Special thanks to Yann Orlarey and Stéphane Letz
 
 faust2webaudio is distributed under the terms the MIT or GPL2 Licenses.
 Choose the license that best suits your project. The text of the MIT and GPL
 licenses are at the root directory.
 
 Additional code: GRAME 2014-2017
*/
 
'use strict';

var faust = faust || {};

faust.error_msg = null;
faust.getErrorMessage = function() { return faust.error_msg; };

// Monophonic Faust DSP

/** 
* Constructor
*
* @param dsp_instance - the wasm instance
* @param context - the Web Audio context
* @param buffer_size - the buffer_size in frames
* 
* @return a valid WebAudio ScriptProcessorNode object or null
*/
faust.noise = function (dsp_instance, context, buffer_size) {

    // Keep JSON parsed object
    var json_object = JSON.parse(getJSONnoise());
    
    function getNumInputsAux ()
    {
        return (json_object.inputs !== undefined) ? parseInt(json_object.inputs) : 0;
    }
    
    function getNumOutputsAux ()
    {
        return (json_object.outputs !== undefined) ? parseInt(json_object.outputs) : 0;
    }

    var sp;
    try {
        sp = context.createScriptProcessor(buffer_size, getNumInputsAux(), getNumOutputsAux());
    } catch (e) {
        faust.error_msg = "Error in createScriptProcessor: " + e;
        return null;
    }
    
    sp.json_object = json_object;
    
    sp.output_handler = null;
    sp.ins = null;
    sp.outs = null;
    
    sp.dspInChannnels = [];
    sp.dspOutChannnels = [];
    
    sp.numIn = getNumInputsAux();
    sp.numOut = getNumOutputsAux();
     
    // Memory allocator
    sp.ptr_size = 4;
    sp.sample_size = 4;
    
    sp.factory = dsp_instance.exports;
    sp.HEAP = dsp_instance.exports.memory.buffer;
    sp.HEAP32 = new Int32Array(sp.HEAP);
    sp.HEAPF32 = new Float32Array(sp.HEAP);
     
    console.log(sp.HEAP);
    console.log(sp.HEAP32);
    console.log(sp.HEAPF32);
 
    // bargraph
    sp.outputs_timer = 5;
    sp.outputs_items = [];
     
    // input items
    sp.inputs_items = [];
     
    // Start of HEAP index
    
    // DSP is placed first with index 0. Audio buffer start at the end of DSP.
    sp.audio_heap_ptr = getSizenoise();

    // Setup pointers offset
    sp.audio_heap_ptr_inputs = sp.audio_heap_ptr;
    sp.audio_heap_ptr_outputs = sp.audio_heap_ptr_inputs + (sp.numIn * sp.ptr_size);
     
    // Setup buffer offset
    sp.audio_heap_inputs = sp.audio_heap_ptr_outputs + (sp.numOut * sp.ptr_size);
    sp.audio_heap_outputs = sp.audio_heap_inputs + (sp.numIn * buffer_size * sp.sample_size);
    
    // Start of DSP memory : DSP is placed first with index 0
    sp.dsp = 0;
 
    sp.pathTable = getPathTablenoise();
    
    // Allocate table for 'setParamValue'
    sp.value_table = [];
        
    sp.update_outputs = function ()
    {
        if (sp.outputs_items.length > 0 && sp.output_handler && sp.outputs_timer-- === 0) {
            sp.outputs_timer = 5;
            for (var i = 0; i < sp.outputs_items.length; i++) {
                sp.output_handler(sp.outputs_items[i], sp.factory.getParamValue(sp.dsp, sp.pathTable[sp.outputs_items[i]]));
            }
        }
    }
    
    sp.compute = function (e)
    {
        var i, j;
        
        // Read inputs
        for (i = 0; i < sp.numIn; i++) {
            var input = e.inputBuffer.getChannelData(i);
            var dspInput = sp.dspInChannnels[i];
            for (j = 0; j < input.length; j++) {
                dspInput[j] = input[j];
            }
        }
        
        // Update control state
        for (i = 0; i < sp.inputs_items.length; i++) {
            var path = sp.inputs_items[i];
            var values = sp.value_table[path];
            sp.factory.setParamValue(sp.dsp, sp.pathTable[path], values[0]);
            values[0] = values[1];
        }
        
        // Compute
        sp.factory.compute(sp.dsp, buffer_size, sp.ins, sp.outs);
       
        // Update bargraph
        sp.update_outputs();
        
        // Write outputs
        for (i = 0; i < sp.numOut; i++) {
            var output = e.outputBuffer.getChannelData(i);
            var dspOutput = sp.dspOutChannnels[i];
            for (j = 0; j < output.length; j++) {
                output[j] = dspOutput[j];
            }
        }
    };
         
    // JSON parsing
    sp.parse_ui = function (ui)
    {
        for (var i = 0; i < ui.length; i++) {
            sp.parse_group(ui[i]);
        }
    }
    
    sp.parse_group = function (group)
    {
        if (group.items) {
            sp.parse_items(group.items);
        }
    }
    
    sp.parse_items = function (items)
    {
        var i;
        for (i = 0; i < items.length; i++) {
            sp.parse_item(items[i]);
        }
    }
    
    sp.parse_item = function (item)
    {
        if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup") {
            sp.parse_items(item.items);
        } else if (item.type === "hbargraph" || item.type === "vbargraph") {
            // Keep bargraph adresses
            sp.outputs_items.push(item.address);
        } else if (item.type === "vslider" || item.type === "hslider" || item.type === "button" || item.type === "checkbox" || item.type === "nentry") {
            // Keep inputs adresses
            sp.inputs_items.push(item.address);
        }
    }
      
    sp.initAux = function ()
    {
        var i;
         
        // Setup web audio context
        console.log("buffer_size %d", buffer_size);
        sp.onaudioprocess = sp.compute;
        
        if (sp.numIn > 0) {
            sp.ins = sp.audio_heap_ptr_inputs;
            for (i = 0; i < sp.numIn; i++) {
                sp.HEAP32[(sp.ins >> 2) + i] = sp.audio_heap_inputs + ((buffer_size * sp.sample_size) * i);
            }
     
            // Prepare Ins buffer tables
            var dspInChans = sp.HEAP32.subarray(sp.ins >> 2, (sp.ins + sp.numIn * sp.ptr_size) >> 2);
            for (i = 0; i < sp.numIn; i++) {
                sp.dspInChannnels[i] = sp.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + buffer_size * sp.sample_size) >> 2);
            }
        }
        
        if (sp.numOut > 0) {
            sp.outs = sp.audio_heap_ptr_outputs;
            for (i = 0; i < sp.numOut; i++) {
                sp.HEAP32[(sp.outs >> 2) + i] = sp.audio_heap_outputs + ((buffer_size * sp.sample_size) * i);
            }
          
            // Prepare Out buffer tables
            var dspOutChans = sp.HEAP32.subarray(sp.outs >> 2, (sp.outs + sp.numOut * sp.ptr_size) >> 2);
            for (i = 0; i < sp.numOut; i++) {
                sp.dspOutChannnels[i] = sp.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + buffer_size * sp.sample_size) >> 2);
            }
        }
                                
        // bargraph
        sp.parse_ui(sp.json_object.ui);
        
        // Init DSP
        sp.factory.init(sp.dsp, context.sampleRate);
        
        // Init 'value' table
        for (i = 0; i < sp.inputs_items.length; i++) {
            var path = sp.inputs_items[i];
            var values = new Float32Array(2);
            values[0] = values[1] = sp.factory.getParamValue(sp.dsp, sp.pathTable[path]);
            sp.value_table[path] = values;
        }
    }
    
    /*
     Public API to be used to control the DSP.
    */

    /* Return current sample rate */
    sp.getSampleRate = function ()
    {
        return context.sampleRate;
    }

    /* Return instance number of audio inputs. */
    sp.getNumInputs = function ()
    {
        return getNumInputsAux();
    }

    /* Return instance number of audio outputs. */
    sp.getNumOutputs = function ()
    {
        return getNumOutputsAux();
    }

    /**
     * Global init, doing the following initialization:
     * - static tables initialization
     * - call 'instanceInit': constants and instance state initialisation
     *
     * @param sample_rate - the sampling rate in Hertz
     */
    sp.init = function (sample_rate)
    {
        sp.factory.init(sp.dsp, sample_rate);
    }

    /** 
     * Init instance state.
     *
     * @param sample_rate - the sampling rate in Hertz
     */
    sp.instanceInit = function (sample_rate)
    {
        sp.factory.instanceInit(sp.dsp, sample_rate);
    }

    /** 
     * Init instance constant state.
     *
     * @param sample_rate - the sampling rate in Hertz
     */
    sp.instanceConstants = function (sample_rate)
    {
        sp.factory.instanceConstants(sp.dsp, sample_rate);
    }

    /* Init default control parameters values. */
    sp.instanceResetUserInterface = function ()
    {
        sp.factory.instanceResetUserInterface(sp.dsp);
    }

    /* Init instance state (delay lines...).*/
    sp.instanceClear = function ()
    {
        sp.factory.instanceClear(sp.dsp);
    }
    
    /**
     * Trigger the Meta handler with instance specific calls to 'declare' (key, value) metadata.
     *
     * @param handler - the Meta handler as a 'declare' function of type (key, value)
     */
    sp.metadata = function (handler)
    {
        metadatanoise(handler);
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
     sp.setOutputParamHandler = function (handler)
     {
         sp.output_handler = handler;
     }

     /**
     * Get the current output handler.
     */
     sp.getOutputParamHandler = function ()
     {
         return sp.output_handler;
     }

    /**
     * Set control value.
     *
     * @param path - the path to the wanted control (retrieved using 'getParams' method)
     * @param val - the float value for the wanted parameter
     */
    sp.setParamValue = function (path, val)
    {
        var values = sp.value_table[path];
        if (values) {
            if (sp.factory.getParamValue(sp.dsp, sp.pathTable[path]) === values[0]) {
                values[0] = val;
            } 
            values[1] = val;
        }
    }

    /**
     * Get control value.
     *
     * @param path - the path to the wanted control (retrieved using 'controls' method)
     *
     * @return the float value
     */
    sp.getParamValue = function (path)
    {
        return sp.factory.getParamValue(sp.dsp, sp.pathTable[path]);
    }
    
    /**
     * Get the table of all input parameters paths.
     *
     * @return the table of all input parameter paths.
     */
    sp.getParams = function()
    {
        return sp.inputs_items;
    }
    
    /**
     * Get DSP JSON description with its UI and metadata
     *
     * @return DSP JSON description
     */
    sp.getJSON = function ()
    {
        return getJSONnoise();
    }

    // Init resulting DSP
    sp.initAux();

    return sp;
};

/** 
* Create a ScriptProcessorNode Web Audio object from a wasm filename
*
* @param context - the Web Audio context
* @param buffer_size - the buffer_size in frames
* @param callback - a callback taking the created ScriptProcessorNode as parameter, or null in case of error
*/
faust.createnoise = function(context, buffer_size, callback)
{
    var asm2wasm = { // special asm2wasm imports
        "fmod": function(x, y) {
            return x % y;
        },
        "log10": function(x) {
            return window.Math.log(x) / window.Math.log(10);
        },
        "remainder": function(x, y) {
            return x - window.Math.round(x/y) * y;
        }
    };
    
    var importObject = { imports: { print: arg => console.log(arg) } }
    
    importObject["global.Math"] = window.Math;
    importObject["asm2wasm"] = asm2wasm;
    
    fetch('noise.wasm')
    .then(dsp_file => dsp_file.arrayBuffer())
    .then(dsp_bytes => WebAssembly.instantiate(dsp_bytes, importObject))
    .then(dsp_module => callback(faust.noise(dsp_module.instance, context, buffer_size)))
    .catch(function() { faust.error_msg = "Faust DSP cannot be loaded or compiled"; callback(null); });
}

