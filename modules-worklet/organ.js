
/*
Code generated with Faust version 2.5.13
Compilation options: wasm-eb, -scal -ftz 2
*/

function getJSONorgan() {
	return "{\"name\":\"organ\",\"version\":\"2.5.13\",\"options\":\"wasm-eb, -scal -ftz 2\",\"size\":\"68\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"organ\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"organ\",\"items\":[{\"type\":\"hslider\",\"label\":\"freq\",\"address\":\"/organ/freq\",\"index\":\"32\",\"meta\":[{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"20\",\"max\":\"20000\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"gain\",\"address\":\"/organ/gain\",\"index\":\"8\",\"init\":\"0.5\",\"min\":\"0\",\"max\":\"10\",\"step\":\"0.01\"},{\"type\":\"button\",\"label\":\"gate\",\"address\":\"/organ/gate\",\"index\":\"4\"},{\"type\":\"hslider\",\"label\":\"volume\",\"address\":\"/organ/volume\",\"index\":\"0\",\"init\":\"0.5\",\"min\":\"0\",\"max\":\"1\",\"step\":\"0.01\"}]}]}";
}
function getBase64Codeorgan() { return "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IiwiaXRlbXMiOlt7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJmcmVxIiwiYWRkcmVzcyI6Ii9vcmdhbi9mcmVxIiwiaW5kZXgiOiIzMiIsIm1ldGEiOlt7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjQ0MCIsIm1pbiI6IjIwIiwibWF4IjoiMjAwMDAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6ImdhaW4iLCJhZGRyZXNzIjoiL29yZ2FuL2dhaW4iLCJpbmRleCI6IjgiLCJpbml0IjoiMC41IiwibWluIjoiMCIsIm1heCI6IjEwIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJidXR0b24iLCJsYWJlbCI6ImdhdGUiLCJhZGRyZXNzIjoiL29yZ2FuL2dhdGUiLCJpbmRleCI6IjQifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJ2b2x1bWUiLCJhZGRyZXNzIjoiL29yZ2FuL3ZvbHVtZSIsImluZGV4IjoiMCIsImluaXQiOiIwLjUiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIwLjAxIn1dfV19MA=="; }

/*
 faust2wasm
 
 Additional code: GRAME 2017
*/
 
'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
	alert("AudioWorklet is not supported in this browser !")
}

class organ_polyNode extends AudioWorkletNode {
    
    constructor(context, options) 
    {
        var json_object = JSON.parse(getJSONorgan());
     
        // Setting values for the input, the output and the channel count.
        options.numberOfInputs = parseInt(json_object.inputs);
        options.numberOfOutputs = parseInt(json_object.outputs);
        options.channelCount = 1;
        
        super(context, 'organ_poly', options);
        
        // JSON parsing functions
        this.parse_ui = function(ui, obj)
        {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }
        
        this.parse_group = function(group, obj)
        {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }
        
        this.parse_items = function(items, obj)
        {
            for (var i = 0; i < items.length; i++) {
            	this.parse_item(items[i], obj);
            }
        }
        
        this.parse_item = function(item, obj)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
        
        this.output_handler = null;
        
        this.json_object = json_object;
            
        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        
        this.pathTable = [];
    
        // Parse UI
        this.parse_ui(this.json_object.ui, this);
        
        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    getJSON()
    {
        return getJSONorgan();
    }
    
    setParamValue(path, val)
    {
        this.port.postMessage({ type:"param", key:path, value:val });
        this.parameters.get(path).setValueAtTime(val, 0);
    }
    
    getParamValue(path)
    {
        return this.parameters.get(path).value;
    }
    
    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler)
    {
        this.output_handler = handler;
    }
    
    /**
     * Get the current output handler.
     */
    getOutputParamHandler()
    {
        return this.output_handler;
    }
    
    // TO REMOVE
    getNumInputs()
    {
        return parseInt(this.json_object.inputs);
    }
    
    getNumOutputs()
    {
        return parseInt(this.json_object.outputs);
    }
    
    getParams()
    {
        return this.inputs_items;
    }
     
    /**
     * Instantiates a new polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOn(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOn", data: [channel, pitch, velocity] });
    }
    
    /**
     * De-instantiates a polyphonic voice.
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param pitch - the MIDI pitch (0..127)
     * @param velocity - the MIDI velocity (0..127)
     */
    keyOff(channel, pitch, velocity)
    {
        this.port.postMessage({ type: "keyOff", data: [channel, pitch, velocity] });
    }

    /**
     * Gently terminates all the active voices.
     */
    allNotesOff()
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, 123, 0] });
    }

    /**
     * Controller
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value)
    {
        this.port.postMessage({ type: "ctrlChange", data: [channel, ctrl, value] });
    }
    
    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (-1..1)
     */
    pitchWheel(channel, wheel)
    {
        this.port.postMessage({ type: "pitchWheel", data: [channel, wheel] });
    }
    
    midiMessage(data)
    {
    	this.port.postMessage({ type:"midi", data:data });
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }
}

// Faust context
var faust = faust || {};

faust.createorgan_poly = function(context, max_polyphony, callback)
{
    // TODO: handle max_polyphony
    
    // The main global scope
    context.audioWorklet.addModule("organ-processor.js")
    .then(function () {
        callback(new organ_polyNode(context, {}));
    })
	.catch(function(error) { console.log(error); console.log("Faust organ_poly cannot be loaded or compiled"); });
}
