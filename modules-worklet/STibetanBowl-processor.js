
/*
Code generated with Faust version 2.11.5
Compilation options: wasm-ib, -scal -ftz 2
*/

function getJSONSTibetanBowl() {
	return "{\"name\":\"Tibetan Bowl\",\"filename\":\"STibetanBowl\",\"version\":\"2.11.5\",\"compile_options\":\"-scal -ftz 2\",\"library_list\":[\"/usr/local/share/faust/stdfaust.lib\",\"/usr/local/share/faust/delays.lib\",\"/usr/local/share/faust/maths.lib\",\"/usr/local/share/faust/instruments.lib\",\"/usr/local/share/faust/filters.lib\",\"/usr/local/share/faust/signals.lib\",\"/usr/local/share/faust/oscillators.lib\",\"/usr/local/share/faust/basics.lib\"],\"include_pathnames\":[\".\",\"/usr/local/share/faust\",\"/usr/share/faust\"],\"size\":\"286688\",\"inputs\":\"0\",\"outputs\":\"1\",\"meta\":[{\"author\":\"Romain Michon\"},{\"basics.lib/name\":\"Faust Basic Element Library\"},{\"basics.lib/version\":\"0.0\"},{\"copyright\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"delays.lib/name\":\"Faust Delay Library\"},{\"delays.lib/version\":\"0.0\"},{\"description\":\"Banded Waveguide Modeld Tibetan Bowl\"},{\"filename\":\"STibetanBowl\"},{\"filters.lib/name\":\"Faust Filters Library\"},{\"filters.lib/version\":\"0.0\"},{\"instruments.lib/author\":\"Romain Michon (rmichon@ccrma.stanford.edu)\"},{\"instruments.lib/copyright\":\"Romain Michon\"},{\"instruments.lib/licence\":\"STK-4.3\"},{\"instruments.lib/name\":\"Faust-STK Tools Library\"},{\"instruments.lib/version\":\"1.0\"},{\"licence\":\"STK-4.3\"},{\"maths.lib/author\":\"GRAME\"},{\"maths.lib/copyright\":\"GRAME\"},{\"maths.lib/license\":\"LGPL with exception\"},{\"maths.lib/name\":\"Faust Math Library\"},{\"maths.lib/version\":\"2.1\"},{\"name\":\"Tibetan Bowl\"},{\"oscillators.lib/name\":\"Faust Oscillator Library\"},{\"oscillators.lib/version\":\"0.0\"},{\"signals.lib/name\":\"Faust Signal Routing Library\"},{\"signals.lib/version\":\"0.0\"},{\"version\":\"1.0\"}],\"ui\":[{\"type\":\"vgroup\",\"label\":\"Tibetan Bowl\",\"items\":[{\"type\":\"hslider\",\"label\":\"Play\",\"address\":\"/Tibetan_Bowl/Play\",\"index\":\"262172\",\"meta\":[{\"0\":\"\"},{\"acc\":\"2 1 -10 0 10\"},{\"tooltip\":\"0=Bow; 1=Strike\"}],\"init\":\"0\",\"min\":\"0\",\"max\":\"1\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Frequency\",\"address\":\"/Tibetan_Bowl/Frequency\",\"index\":\"263208\",\"meta\":[{\"1\":\"\"},{\"tooltip\":\"Tone frequency\"},{\"unit\":\"Hz\"}],\"init\":\"440\",\"min\":\"180\",\"max\":\"780\",\"step\":\"1\"},{\"type\":\"hslider\",\"label\":\"Modulation\",\"address\":\"/Tibetan_Bowl/Modulation\",\"index\":\"286592\",\"meta\":[{\"2\":\"\"},{\"acc\":\"0 1 -10 0 10\"},{\"tooltip\":\"Nonlinearity factor (value between 0 and 1)\"}],\"init\":\"0.02\",\"min\":\"0\",\"max\":\"0.1\",\"step\":\"0.001\"},{\"type\":\"hslider\",\"label\":\"Modulation Frequency\",\"address\":\"/Tibetan_Bowl/Modulation_Frequency\",\"index\":\"286564\",\"meta\":[{\"3\":\"\"},{\"acc\":\"0 0 -10 0 10\"},{\"unit\":\"Hz\"}],\"init\":\"220\",\"min\":\"150\",\"max\":\"500\",\"step\":\"0.1\"}]}]}";
}
function getBase64CodeSTibetanBowl() { return "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uBFBAEOLlWJCQQAqAoSAEJU4ApC4EUEAQ2Tonz1BACoChIAQlDgCqLwRQQBDO/GgQkEAKgKEgBCVOAKsvBFBAEOKYjo9QQAqAoSAEJQ4AsS+EUEAQ1cUCkNBACoChIAQlTgCyL4RQQBDAACAP0EAKgKEgBCVOALgvhFBAEMAAIA/QQAqAoiAEJM4Asy/EQuQgICAAAAgACABEAwgABAOIAAQCwuygICAAABBAEMAAAAAOAKcgBBBAEMAANxDOAKoiBBBAEMAAFxDOALkvhFBAEMK16M8OAKAvxELjYCAgAAAIAEgACAAIAFIGw8LjYCAgAAAIAAgASAAIAFIGw8LjICAgAAAIAAgAWogAjgCAAsLyZOAgAABAEEAC8ITeyJuYW1lIjoiVGliZXRhbiBCb3dsIiwiZmlsZW5hbWUiOiJTVGliZXRhbkJvd2wiLCJ2ZXJzaW9uIjoiMi4xMS41IiwiY29tcGlsZV9vcHRpb25zIjoiLXNjYWwgLWZ0eiAyIiwibGlicmFyeV9saXN0IjpbIi91c3IvbG9jYWwvc2hhcmUvZmF1c3Qvc3RkZmF1c3QubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9kZWxheXMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9tYXRocy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2luc3RydW1lbnRzLmxpYiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QvZmlsdGVycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L3NpZ25hbHMubGliIiwiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdC9vc2NpbGxhdG9ycy5saWIiLCIvdXNyL2xvY2FsL3NoYXJlL2ZhdXN0L2Jhc2ljcy5saWIiXSwiaW5jbHVkZV9wYXRobmFtZXMiOlsiLiIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0Il0sInNpemUiOiIyODY2ODgiLCJpbnB1dHMiOiIwIiwib3V0cHV0cyI6IjEiLCJtZXRhIjpbeyJhdXRob3IiOiJSb21haW4gTWljaG9uIn0seyJiYXNpY3MubGliL25hbWUiOiJGYXVzdCBCYXNpYyBFbGVtZW50IExpYnJhcnkifSx7ImJhc2ljcy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiY29weXJpZ2h0IjoiUm9tYWluIE1pY2hvbiAocm1pY2hvbkBjY3JtYS5zdGFuZm9yZC5lZHUpIn0seyJkZWxheXMubGliL25hbWUiOiJGYXVzdCBEZWxheSBMaWJyYXJ5In0seyJkZWxheXMubGliL3ZlcnNpb24iOiIwLjAifSx7ImRlc2NyaXB0aW9uIjoiQmFuZGVkIFdhdmVndWlkZSBNb2RlbGQgVGliZXRhbiBCb3dsIn0seyJmaWxlbmFtZSI6IlNUaWJldGFuQm93bCJ9LHsiZmlsdGVycy5saWIvbmFtZSI6IkZhdXN0IEZpbHRlcnMgTGlicmFyeSJ9LHsiZmlsdGVycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsiaW5zdHJ1bWVudHMubGliL2F1dGhvciI6IlJvbWFpbiBNaWNob24gKHJtaWNob25AY2NybWEuc3RhbmZvcmQuZWR1KSJ9LHsiaW5zdHJ1bWVudHMubGliL2NvcHlyaWdodCI6IlJvbWFpbiBNaWNob24ifSx7Imluc3RydW1lbnRzLmxpYi9saWNlbmNlIjoiU1RLLTQuMyJ9LHsiaW5zdHJ1bWVudHMubGliL25hbWUiOiJGYXVzdC1TVEsgVG9vbHMgTGlicmFyeSJ9LHsiaW5zdHJ1bWVudHMubGliL3ZlcnNpb24iOiIxLjAifSx7ImxpY2VuY2UiOiJTVEstNC4zIn0seyJtYXRocy5saWIvYXV0aG9yIjoiR1JBTUUifSx7Im1hdGhzLmxpYi9jb3B5cmlnaHQiOiJHUkFNRSJ9LHsibWF0aHMubGliL2xpY2Vuc2UiOiJMR1BMIHdpdGggZXhjZXB0aW9uIn0seyJtYXRocy5saWIvbmFtZSI6IkZhdXN0IE1hdGggTGlicmFyeSJ9LHsibWF0aHMubGliL3ZlcnNpb24iOiIyLjEifSx7Im5hbWUiOiJUaWJldGFuIEJvd2wifSx7Im9zY2lsbGF0b3JzLmxpYi9uYW1lIjoiRmF1c3QgT3NjaWxsYXRvciBMaWJyYXJ5In0seyJvc2NpbGxhdG9ycy5saWIvdmVyc2lvbiI6IjAuMCJ9LHsic2lnbmFscy5saWIvbmFtZSI6IkZhdXN0IFNpZ25hbCBSb3V0aW5nIExpYnJhcnkifSx7InNpZ25hbHMubGliL3ZlcnNpb24iOiIwLjAifSx7InZlcnNpb24iOiIxLjAifV0sInVpIjpbeyJ0eXBlIjoidmdyb3VwIiwibGFiZWwiOiJUaWJldGFuIEJvd2wiLCJpdGVtcyI6W3sidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IlBsYXkiLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9QbGF5IiwiaW5kZXgiOiIyNjIxNzIiLCJtZXRhIjpbeyIwIjoiIn0seyJhY2MiOiIyIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiIwPUJvdzsgMT1TdHJpa2UifV0sImluaXQiOiIwIiwibWluIjoiMCIsIm1heCI6IjEiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6IkZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL0ZyZXF1ZW5jeSIsImluZGV4IjoiMjYzMjA4IiwibWV0YSI6W3siMSI6IiJ9LHsidG9vbHRpcCI6IlRvbmUgZnJlcXVlbmN5In0seyJ1bml0IjoiSHoifV0sImluaXQiOiI0NDAiLCJtaW4iOiIxODAiLCJtYXgiOiI3ODAiLCJzdGVwIjoiMSJ9LHsidHlwZSI6ImhzbGlkZXIiLCJsYWJlbCI6Ik1vZHVsYXRpb24iLCJhZGRyZXNzIjoiL1RpYmV0YW5fQm93bC9Nb2R1bGF0aW9uIiwiaW5kZXgiOiIyODY1OTIiLCJtZXRhIjpbeyIyIjoiIn0seyJhY2MiOiIwIDEgLTEwIDAgMTAifSx7InRvb2x0aXAiOiJOb25saW5lYXJpdHkgZmFjdG9yICh2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpIn1dLCJpbml0IjoiMC4wMiIsIm1pbiI6IjAiLCJtYXgiOiIwLjEiLCJzdGVwIjoiMC4wMDEifSx7InR5cGUiOiJoc2xpZGVyIiwibGFiZWwiOiJNb2R1bGF0aW9uIEZyZXF1ZW5jeSIsImFkZHJlc3MiOiIvVGliZXRhbl9Cb3dsL01vZHVsYXRpb25fRnJlcXVlbmN5IiwiaW5kZXgiOiIyODY1NjQiLCJtZXRhIjpbeyIzIjoiIn0seyJhY2MiOiIwIDAgLTEwIDAgMTAifSx7InVuaXQiOiJIeiJ9XSwiaW5pdCI6IjIyMCIsIm1pbiI6IjE1MCIsIm1heCI6IjUwMCIsInN0ZXAiOiIwLjEifV19XX0="; }

/*
 faust2wasm: GRAME 2017-2018
*/
 
'use strict';

// Monophonic Faust DSP
class STibetanBowlProcessor extends AudioWorkletProcessor {
    
    // JSON parsing functions
    static parse_ui(ui, obj, callback)
    {
        for (var i = 0; i < ui.length; i++) {
            STibetanBowlProcessor.parse_group(ui[i], obj, callback);
        }
    }
    
    static parse_group(group, obj, callback)
    {
        if (group.items) {
            STibetanBowlProcessor.parse_items(group.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
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
            STibetanBowlProcessor.parse_items(item.items, obj, callback);
        } else if (item.type === "hbargraph"
                   || item.type === "vbargraph") {
            // Keep bargraph adresses
            obj.outputs_items.push(item.address);
            obj.pathTable[item.address] = parseInt(item.index);
        } else if (item.type === "soundfile") {
            // Keep soundfile adresses
            obj.soundfile_items.push(item.address);
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
                nUint24 |= STibetanBowlProcessor.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
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
   
    static get parameterDescriptors () 
    {
        // Analyse JSON to generate AudioParam parameters
        var params = [];
        STibetanBowlProcessor.parse_ui(JSON.parse(getJSONSTibetanBowl()).ui, params, STibetanBowlProcessor.parse_item1);
        return params;
    }
    
    constructor(options)
    {
        super(options);
      
        this.json_object = JSON.parse(getJSONSTibetanBowl());

        this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
        
        this.ins = null;
        this.outs = null;

        this.dspInChannnels = [];
        this.dspOutChannnels = [];

        this.numIn = parseInt(this.json_object.inputs);
        this.numOut = parseInt(this.json_object.outputs);

        // Memory allocator
        this.ptr_size = 4;
        this.sample_size = 4;
        this.integer_size = 4;
        
        this.STibetanBowl_instance = new WebAssembly.Instance(STibetanBowlProcessor.wasm_module, STibetanBowlProcessor.importObject);
  	   	this.factory = this.STibetanBowl_instance.exports;
        this.HEAP = this.STibetanBowl_instance.exports.memory.buffer;
        this.HEAP32 = new Int32Array(this.HEAP);
        this.HEAPF32 = new Float32Array(this.HEAP);

        //console.log(this.HEAP);
        //console.log(this.HEAP32);
        //console.log(this.HEAPF32);

        // bargraph
        this.outputs_timer = 5;
        this.outputs_items = [];

        // input items
        this.inputs_items = [];
        
        // soundfile items
        this.soundfile_items = [];

        // Start of HEAP index

        // DSP is placed first with index 0. Audio buffer start at the end of DSP.
        this.audio_heap_ptr = parseInt(this.json_object.size);

        // Setup pointers offset
        this.audio_heap_ptr_inputs = this.audio_heap_ptr;
        this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

        // Setup buffer offset
        this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
        this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * STibetanBowlProcessor.buffer_size * this.sample_size);
        
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
        
        this.loadFile = function (sound_index, sound_ptr, length, sample_rate, channels, buffers)
        {
            /*
             Soundfile layout:
            
                FAUSTFLOAT** fBuffers;
                int fLength;
                int fSampleRate;
                int fChannels;
             
                ===========
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                Soundfile struct
                fBuffers[channels]
                fBuffers0
                fBuffers1
                ...
                ===========
            */
            
            var size_of_soundfile = this.ptr_size + (this.integer_size * 3);  // fBuffers, fLength, fSampleRate, fChannels
            
            //console.log("sound_ptr " + sound_ptr);
            //console.log("size_of_soundfile " + size_of_soundfile);
            
            // end of sounfile
            var end_of_soundfile_ptr = sound_ptr + size_of_soundfile;
            
            this.HEAP32[sound_ptr >> 2] = end_of_soundfile_ptr;
            this.HEAP32[(sound_ptr + 4) >> 2] = length;      // fLength
            this.HEAP32[(sound_ptr + 8) >> 2] = sample_rate; // fSampleRate
            this.HEAP32[(sound_ptr + 12) >> 2] = channels;   // fChannels
            
            //console.log("end_of_soundfile_ptr " + end_of_soundfile_ptr);
            
            // Setup soundfile pointers
            var start_of_soundfile_data_ptr = end_of_soundfile_ptr + this.ptr_size * channels;
            
            for (var i = 0; i < channels; i++) {
                this.HEAP32[(end_of_soundfile_ptr + (i * this.ptr_size)) >> 2] = start_of_soundfile_data_ptr + (i * length * this.sample_size);
            }
            
            // Setup soundfile buffer
            for (var i = 0; i < channels; i++) {
                
                // start of sound buffer
                var start_of_buffer_ptr = start_of_soundfile_data_ptr + (i * length * this.sample_size);
                
                // generate a 440 Hz signal
                for (var j = 0; j < length; j++) {
                    this.HEAPF32[(start_of_buffer_ptr + (j * this.sample_size)) >> 2] = 0.8 * Math.sin((j/length)*2*Math.PI);
                }
            }
            
            // Setup fSoundfile fields in the DSP structure
            //console.log("sound_index " + sound_index);
            //console.log("this.pathTable[this.soundfile_items[sound_index]] " + this.pathTable[this.soundfile_items[sound_index]]);
            
            this.HEAP32[this.pathTable[this.soundfile_items[sound_index]] >> 2] = sound_ptr;
            
            /*
            console.log("start_of_soundfile_data_ptr " + start_of_soundfile_data_ptr);
            console.log("length " + length);
            console.log("channels " + channels);
            console.log("this.sample_size " + this.sample_size);
            console.log("END " + (start_of_soundfile_data_ptr + (channels * length * this.sample_size)));
            */
            
            // End of buffer data;
            return start_of_soundfile_data_ptr + (channels * length * this.sample_size);
        }
        
        this.initAux = function ()
        {
            var i;
            
            if (this.numIn > 0) {
                this.ins = this.audio_heap_ptr_inputs;
                for (i = 0; i < this.numIn; i++) {
                    this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Ins buffer tables
                var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                for (i = 0; i < this.numIn; i++) {
                    this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            if (this.numOut > 0) {
                this.outs = this.audio_heap_ptr_outputs;
                for (i = 0; i < this.numOut; i++) {
                    this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((STibetanBowlProcessor.buffer_size * this.sample_size) * i);
                }
                
                // Prepare Out buffer tables
                var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                for (i = 0; i < this.numOut; i++) {
                    this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + STibetanBowlProcessor.buffer_size * this.sample_size) >> 2);
                }
            }
            
            // Parse UI
            STibetanBowlProcessor.parse_ui(this.json_object.ui, this, STibetanBowlProcessor.parse_item2);
            
            /*
            console.log("soundfile_items.length " + this.soundfile_items.length);
            
            // Setup soundfile offset (after audio data)
            this.soundfile_ptr = this.audio_heap_outputs + (this.numOut * STibetanBowlProcessor.buffer_size * this.sample_size);
            
            var sound_ptr1 = this.soundfile_ptr;
            var sound_ptr2 = this.loadFile(0, sound_ptr1, 44100/700, 44100, 2, null);
            var sound_ptr3 = this.loadFile(1, sound_ptr2, 44100/500, 44100, 2, null);
            */
             
            // Init DSP
            this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
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
    }
    
    process(inputs, outputs, parameters) 
    {
        var input = inputs[0];
        var output = outputs[0];
        
        // Check inputs
        if (this.numIn > 0 && ((input === undefined) || (input[0].length === 0))) {
            //console.log("Process input error");
            return true;
        }
        // Check outputs
        if (this.numOut > 0 && ((output === undefined) || (output[0].length === 0))) {
            //console.log("Process output error");
            return true;
        }
        
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
        this.factory.compute(this.dsp, STibetanBowlProcessor.buffer_size, this.ins, this.outs);
        
        // Update bargraph
        this.update_outputs();
        
        // Copy outputs
        if (output !== undefined) {
            for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                var dspOutput = this.dspOutChannnels[chan];
                output[chan].set(dspOutput);
            }
        }
        
        return true;
    }
}

// Globals

STibetanBowlProcessor.buffer_size = 128;

STibetanBowlProcessor.importObject = {
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
    if (STibetanBowlProcessor.wasm_module == undefined) {
        STibetanBowlProcessor.wasm_module = new WebAssembly.Module(STibetanBowlProcessor.atob(getBase64CodeSTibetanBowl()));
        registerProcessor('STibetanBowl', STibetanBowlProcessor);
    }
} catch (e) {
    console.log(e); console.log("Faust STibetanBowl cannot be loaded or compiled");
}

