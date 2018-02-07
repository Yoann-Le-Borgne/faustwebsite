
/*
Code generated with Faust version 2.5.19
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSFlute() {
	return "{\"name\":\"Flute\",\"version\":\"2.5.19\",\"options\":\"wasm-ib, -scal -ftz 2\",\"size\":\"65836\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Nonlinear WaveGuide Flute\"},{\"envelopes.lib/author\":\"GRAME\"},{\"envelopes.lib/copyright\":\"GRAME\"},{\"envelopes.lib/license\":\"LGPL with exception\"},{\"envelopes.lib/name\":\"Faust Envelope Library\"},{\"envelopes.lib/version\":\"0.0\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Flute\"},{\"noises.lib/name\":\"Faust Noise Generator Library\"},{\"noises.lib/version\":\"0.0\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Flute\",\"items\":[{\"type\":\"hslider\",\"label\":\"ON/OFF (ASR Envelope)\",\"address\":\"/Flute/ON/OFF_(ASR_Envelope)\",\"index\":\"0\",\"meta\":[{\"0\":\"\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Flute/Frequency\",\"index\":\"76\",\"meta\":[{\"1\":\"\"},{\"acc\":\"1 1 -10 0 10\"}],\"init\":\"440\",\"min\":\"247\",\"max\":\"1200\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Pressure\",\"address\":\"/Flute/Pressure\",\"index\":\"88\",\"meta\":[{\"2\":\"\"},{\"acc\":\"1 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.96\",\"min\":\"0.2\",\"max\":\"0.99\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Breath Noise\",\"address\":\"/Flute/Breath_Noise\",\"index\":\"144\",\"meta\":[{\"3\":\"\"},{\"acc\":\"2 0 -10 0 10\"},{\"style\":\"knob\"}],\"init\":\"0.02\",\"min\":\"0.01\",\"max\":\"0.2\",\"step\":\"0.01\"},{\"type\":\"hslider\",\"label\":\"Vibrato Freq (Vibrato Envelope)\",\"address\":\"/Flute/Vibrato_Freq_(Vibrato_Envelope)\",\"index\":\"160\",\"meta\":[{\"4\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"style\":\"knob\"},{\"unit\":\"Hz\"}],\"init\":\"4\",\"min\":\"0.5\",\"max\":\"8\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSFlute() { return "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gICAAAAgACABEAwgABAOIAAQCwu2gICAAABBAEMAAAAAOAIAQQBDAADcQzgCTEEAQ4/CdT84AlhBAEMK16M8OAKQAUEAQwAAgEA4AqABC42AgIAAACABIAAgACABSBsPC42AgIAAACAAIAEgACABSBsPC4yAgIAAACAAIAFqIAI4AgALC/OSgIAAAQBBAAvsEnsibmFtZSI6IkZsdXRlIiwidmVyc2lvbiI6IjIuNS4xOSIsIm9wdGlvbnMiOiJ3YXNtLWliLCAtc2NhbCAtZnR6IDIiLCJzaXplIjoiNjU4MzYiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIChybWljaG9uQGNjcm1hLnN0YW5mb3JkLmVkdSkifSx7ImJhc2ljcy5saWIvbmFtZSI6IkZhdXN0IEJhc2ljIEVsZW1lbnQgTGlicmFyeSJ9LHsiYmFzaWNzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJjb3B5cmlnaHQiOiJSb21haW4gTWljaG9uIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiTm9ubGluZWFyIFdhdmVHdWlkZSBGbHV0ZSJ9LHsiZW52ZWxvcGVzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsiZW52ZWxvcGVzLmxpYi9saWNlbnNlIjoiTEdQTCB3aXRoIGV4Y2VwdGlvbiJ9LHsiZW52ZWxvcGVzLmxpYi9uYW1lIjoiRmF1c3QgRW52ZWxvcGUgTGlicmFyeSJ9LHsiZW52ZWxvcGVzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJmaWx0ZXJzLmxpYi9uYW1lIjoiRmF1c3QgRmlsdGVycyBMaWJyYXJ5In0seyJmaWx0ZXJzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJpbnN0cnVtZW50cy5saWIvYXV0aG9yIjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJpbnN0cnVtZW50cy5saWIvY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiJ9LHsiaW5zdHJ1bWVudHMubGliL2xpY2VuY2UiOiJTVEstNC4zIn0seyJpbnN0cnVtZW50cy5saWIvbmFtZSI6IkZhdXN0LVNUSyBUb29scyBMaWJyYXJ5In0seyJpbnN0cnVtZW50cy5saWIvdmVyc2lvbiI6IjEuMCJ9LHsibGljZW5jZSI6IlNUSy00LjMifSx7Im1hdGhzLmxpYi9hdXRob3IiOiJHUkFNRSJ9LHsibWF0aHMubGliL2NvcHlyaWdodCI6IkdSQU1FIn0seyJtYXRocy5saWIvbGljZW5zZSI6IkxHUEwgd2l0aCBleGNlcHRpb24ifSx7Im1hdGhzLmxpYi9uYW1lIjoiRmF1c3QgTWF0aCBMaWJyYXJ5In0seyJtYXRocy5saWIvdmVyc2lvbiI6IjIuMSJ9LHsibmFtZSI6IkZsdXRlIn0seyJub2lzZXMubGliL25hbWUiOiJGYXVzdCBOb2lzZSBHZW5lcmF0b3IgTGlicmFyeSJ9LHsibm9pc2VzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJvc2NpbGxhdG9ycy5saWIvbmFtZSI6IkZhdXN0IE9zY2lsbGF0b3IgTGlicmFyeSJ9LHsib3NjaWxsYXRvcnMubGliL3ZlcnNpb24iOiIwLjAifSx7InNpZ25hbHMubGliL25hbWUiOiJGYXVzdCBTaWduYWwgUm91dGluZyBMaWJyYXJ5In0seyJzaWduYWxzLmxpYi92ZXJzaW9uIjoiMC4wIn0seyJ2ZXJzaW9uIjoiMS4wIn1dLCJ1aSI6W3sidHlwZSI6InZncm91cCIsImxhYmVsIjoiRmx1dGUiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik9OL09GRiAoQVNSIEVudmVsb3BlKSIsImFkZHJlc3MiOiIvRmx1dGUvT04vT0ZGXyhBU1JfRW52ZWxvcGUpIiwiaW5kZXgiOiIwIiwibWV0YSI6W3siMCI6IiJ9XSwiaW5pdCI6IjAiLCJtaW4iOiIwIiwibWF4IjoiMSIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiRnJlcXVlbmN5IiwiYWRkcmVzcyI6Ii9GbHV0ZS9GcmVxdWVuY3kiLCJpbmRleCI6Ijc2IiwibWV0YSI6W3siMSI6IiJ9LHsiYWNjIjoiMSAxIC0xMCAwIDEwIn1dLCJpbml0IjoiNDQwIiwibWluIjoiMjQ3IiwibWF4IjoiMTIwMCIsInN0ZXAiOiIxIn0seyJ0eXBlIjoiaHNsaWRlciIsImxhYmVsIjoiUHJlc3N1cmUiLCJhZGRyZXNzIjoiL0ZsdXRlL1ByZXNzdXJlIiwiaW5kZXgiOiI4OCIsIm1ldGEiOlt7IjIiOiIifSx7ImFjYyI6IjEgMCAtMTAgMCAxMCJ9LHsic3R5bGUiOiJrbm9iIn1dLCJpbml0IjoiMC45NiIsIm1pbiI6IjAuMiIsIm1heCI6IjAuOTkiLCJzdGVwIjoiMC4wMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkJyZWF0aCBOb2lzZSIsImFkZHJlc3MiOiIvRmx1dGUvQnJlYXRoX05vaXNlIiwiaW5kZXgiOiIxNDQiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIyIDAgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9XSwiaW5pdCI6IjAuMDIiLCJtaW4iOiIwLjAxIiwibWF4IjoiMC4yIiwic3RlcCI6IjAuMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJWaWJyYXRvIEZyZXEgKFZpYnJhdG8gRW52ZWxvcGUpIiwiYWRkcmVzcyI6Ii9GbHV0ZS9WaWJyYXRvX0ZyZXFfKFZpYnJhdG9fRW52ZWxvcGUpIiwiaW5kZXgiOiIxNjAiLCJtZXRhIjpbeyI0IjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InN0eWxlIjoia25vYiJ9LHsidW5pdCI6Ikh6In1dLCJpbml0IjoiNCIsIm1pbiI6IjAuNSIsIm1heCI6IjgiLCJzdGVwIjoiMC4xIn1dfV19MA=="; }

/*
 faust2wasm
 Additional code: GRAME 2017
*/
 
'use strict';

// Monophonic Faust DSP
class SFluteProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            SFluteProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            SFluteProcessor.parse_items(group.items, obj, callback);
        }
    }
    
    static parse_items(items, obj, callback)
    {
        for (var i = 0; i < items.length; i++) {
            callback(items[i], obj, callback);
        }
    }
    
    static parse_item1(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SFluteProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Nothing
        } else if (item.type === "vslider"
                   || item.type === "hslider"
                   || item.type === "button"
                   || item.type === "checkbox"
                   || item.type === "nentry") {
            obj.push({ name: item.address,
                     defaultValue: item.init,
                     minValue: item.min,
                     maxValue: item.max });
        }
    }
    
    static parse_item2(item, obj, callback)
    {
        if (item.type === "vgroup"
            || item.type === "hgroup"
            || item.type === "tgroup") {
            SFluteProcessor.parse_items(item.items, obj, callback);
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
            if (item.meta !== undefined) {
                for (var i = 0; i < item.meta.length; i++) {
                    if (item.meta[i].midi !== undefined) {
                        if (item.meta[i].midi.trim() === "pitchwheel") {
                            obj.fPitchwheelLabel.push(item.address);
                        } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                            obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                .push({ path:item.address,
                                      min:parseFloat(item.min),
                                      max:parseFloat(item.max) });
                        }
                    }
                }
            }
        }
    }
    
    static b64ToUint6(nChr)
    {
        return nChr > 64 && nChr < 91 ?
        nChr - 65
        : nChr > 96 && nChr < 123 ?
        nChr - 71
        : nChr > 47 && nChr < 58 ?
        nChr + 4
        : nChr === 43 ?
        62
        : nChr === 47 ?
        63
        :
        0;
    }
    
    static atob(sBase64, nBlocksSize)
    {
        if (typeof atob === 'function') {
            return atob(sBase64);
        } else {
            
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, "");
            var nInLen = sB64Enc.length;
            var nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2;
            var taBytes = new Uint8Array(nOutLen);
            
            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= SFluteProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes.buffer;
        }
    }
    
    static remap(v, mn0, mx0, mn1, mx1)
    {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        SFluteProcessor.parse_ui(JSON.parse(getJSONSFlute()).ui, params, SFluteProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSFlute());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        
        this.factory = SFluteProcessor.SFlute_instance.exports;
        this.HEAP = SFluteProcessor.SFlute_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        console.log(this.HEAP);
        console.log(this.HEAP32);
        console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * SFluteProcessor.buffer_size * this.sample_size);

        // Start of DSP memory : DSP is placed first with index 0
        this.dsp = 0;

        this.pathTable = [];

        // Send output values to the AudioNode
        this.update_outputs = function ()
        {
            if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                this.outputs_timer = 5;
                for (var i = 0; i < this.outputs_items.length; i++) {
                    this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                }
            }
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((SFluteProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + SFluteProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            SFluteProcessor.parse_ui(this.json_object.ui, this, SFluteProcessor.parse_item2);
            
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
        }

        this.ctrlChange = function (channel, ctrl, value)
        {
            if (this.fCtrlLabel[ctrl] !== []) {
                for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                    var path = this.fCtrlLabel[ctrl][i].path;
                    this.setParamValue(path, SFluteProcessor.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                    if (this.output_handler) {
                   		this.output_handler(path, this.getParamValue(path));
                   	}
                }
            }
        }

        this.pitchWheel = function (channel, wheel)
        {
            for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
                var path = this.fPitchwheelLabel[i];
                this.setParamValue(path, Math.pow(2.0, wheel/12.0));
                if (this.output_handler) {
                   	this.output_handler(path, this.getParamValue(path));
                }
            }
        }

        this.setParamValue = function (path, val)
        {
            this.HEAPF32[this.pathTable[path]] = val;
        }

        this.getParamValue = function (path)
        {
            return this.HEAPF32[this.pathTable[path]];
        }

        // Init resulting DSP
        this.initAux();

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
    }
    
    handleMessage(event) 
    {
        var msg = event.data;
        switch (msg.type) {
            // Generic MIDI message
            case "midi": this.midiMessage(msg.data); break;
            // Typed MIDI message
            case "keyOn": this.keyOn(msg.data[0], msg.data[1], msg.data[2]); break;
            case "keyOff": this.keyOff(msg.data[0], msg.data[1], msg.data[2]); break;
            case "ctrlChange": this.ctrlChange(msg.data[0], msg.data[1], msg.data[2]); break;
            case "pitchWheel": this.pitchWheel(msg.data[0], msg.data[1]); break;
            // Generic data message
            case "param": this.setParamValue(msg.key, msg.value); break;
            //case "patch": this.onpatch(msg.data); break;
        }
    }
    
    midiMessage(data)
    {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];
        
        if (channel === 9) {
            return;
        } else if (cmd === 8 || ((cmd === 9) && (data2 === 0))) {
            //this.keyOff(channel, data1, data2);
        } else if (cmd === 9) {
            //this.keyOn(channel, data1, data2);
        } else if (cmd === 11) {
            //this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            //this.pitchWheel(channel, ((data2 * 128.0 + data1)-8192)/8192.0);
        }
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Copy inputs
        if (input !== undefined) {
            for (var chan = 0; chan < Math.min(this.numIn, input.length) ; ++chan) {
                var dspInput = this.dspInChannnels[chan];
                dspInput.set(input[chan]);
            }
        }
        
        // Update controls (possibly needed for sample accurate control)
        var params = Object.entries(parameters);
        for (var i = 0; i < params.length; i++) {
            this.HEAPF32[this.pathTable[params[i][0]] >> 2] = params[i][1][0];
        }
        
        // Compute
        this.factory.compute(this.dsp, SFluteProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            //console.log("output.length " + output.length);
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

SFluteProcessor.buffer_size = 128;

SFluteProcessor.importObject = {
    env: {
        memoryBase: 0,
        tableBase: 0,
            
        // Integer version
        _abs: Math.abs,
        
        // Float version
        _acosf: Math.acos,
        _asinf: Math.asin,
        _atanf: Math.atan,
        _atan2f: Math.atan2,
        _ceilf: Math.ceil,
        _cosf: Math.cos,
        _expf: Math.exp,
        _floorf: Math.floor,
        _fmodf: function(x, y) { return x % y; },
        _logf: Math.log,
        _log10f: Math.log10,
        _max_f: Math.max,
        _min_f: Math.min,
        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
        _powf: Math.pow,
        _roundf: Math.fround,
        _sinf: Math.sin,
        _sqrtf: Math.sqrt,
        _tanf: Math.tan,
           
        // Double version
        _acos: Math.acos,
        _asin: Math.asin,
        _atan: Math.atan,
        _atan2: Math.atan2,
        _ceil: Math.ceil,
        _cos: Math.cos,
        _exp: Math.exp,
        _floor: Math.floor,
        _fmod: function(x, y) { return x % y; },
        _log: Math.log,
        _log10: Math.log10,
        _max_: Math.max,
        _min_: Math.min,
        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
        _pow: Math.pow,
        _round: Math.fround,
        _sin: Math.sin,
        _sqrt: Math.sqrt,
        _tan: Math.tan,
        
        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
    }
};

// Synchronously compile and instantiate the WASM module
try {
    let wasm_module = new WebAssembly.Module(SFluteProcessor.atob(getBase64CodeSFlute()));
    SFluteProcessor.SFlute_instance = new WebAssembly.Instance(wasm_module, SFluteProcessor.importObject);
    registerProcessor('SFlute', SFluteProcessor);
} catch (e) {
    console.log(e); console.log("Faust SFlute cannot be loaded or compiled");
}

