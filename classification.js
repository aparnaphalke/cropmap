var studyarea= ee.FeatureCollection("ft:1r5EhIBhsIzWQ1pn76fgfdtjFUuu5py-OzFU79Ygw");

print('studyarea', studyarea);
Map.addLayer(studyarea, {color:'ffff00'},'studyarea');

//get training/validation samples

var samplestrain = ee.FeatureCollection('ft:1D00lyJA5q_bxufIHjNirJAIVJpm5tPByUgFlsMwm').filterBounds(studyarea);
print('samplestrain', samplestrain);

var samplestest = ee.FeatureCollection('ft:1ZSYG1Z36kyL8_ut6CTfhqnlCBbKd6LMv0OYaIgyo').filterBounds(studyarea);
print('samplestest', samplestest);

var TrainingSamples1 = samplestrain;
TrainingSamples1 = TrainingSamples1;

var TrainingSamples2 = TrainingSamples1.randomColumn();
var TrainingSamples= TrainingSamples2.filter(ee.Filter.lessThan('random',1));
print('TrainingSamples', TrainingSamples);
// Map.addLayer(TrainingSamples, {color:'ff0000'}, 'TrainingSamples');

var TestSamples = samplestest;
print('TestSamples',TestSamples);

var TrainingSamplesCrop = TrainingSamples.filter(ee.Filter.eq('label',1));
print('TrainingSamplesCrop',TrainingSamplesCrop);
Map.addLayer(TrainingSamplesCrop, {color:'ff0000'}, 'TrainingSamplesCrop');

var TrainingSamplesnonCrop = TrainingSamples.filter(ee.Filter.eq('label',2));
print('TrainingSamplesnonCrop',TrainingSamplesnonCrop);
Map.addLayer(TrainingSamplesnonCrop, {color:'ff0000'}, 'TrainingSamplesnonCrop');

var TestSamplesCrop = TestSamples.filter(ee.Filter.eq('label',1));
print('TestSamplesCrop',TestSamplesCrop);
Map.addLayer(TestSamplesCrop, {color:'ff0000'}, 'TestSamplesCrop');

var TestSamplesnonCrop = TestSamples.filter(ee.Filter.eq('label',2));
print('TestSamplesnonCrop',TestSamplesnonCrop);
Map.addLayer(TestSamplesnonCrop, {color:'ff0000'}, 'TestSamplesnonCrop');


//collection
var collection = 'LANDSAT/LT5_SR';

//Common band names
// var bandNames = ee.List(['B1','B2','B3','B4','B5','B7']);
// var VIBands = ee.List(['NDVI','NDVI_1','NDVI_2','NDVI_3','NDVI_4','NDVI_5','NDVI_6','NDVI_7','NDVI_8','NDVI_9','NDVI_10','NDVI_11','NDVI_12','NDVI_13','NDVI_14','NDVI_15','NDVI_16','NDVI_17','NDVI_18','NDVI_19','NDVI_20','NDVI_21','NDVI_22','NDVI_23','NDVI_24','NDVI_25','NDVI_26','NDVI_27','NDVI_28','NDVI_29','NDVI_30','NDVI_31','NDVI_32','NDVI_33','NDVI_34']);
// var WIBands = ee.List(['NDWI','NDWI_1','NDWI_2','NDWI_3','NDWI_4','NDWI_5','NDWI_6','NDWI_7','NDWI_8','NDWI_9','NDWI_10','NDWI_11','NDWI_12','NDWI_13','NDWI_14','NDWI_15','NDWI_16','NDWI_17','NDWI_18','NDWI_19','NDWI_20','NDWI_21','NDWI_22','NDWI_23','NDWI_24','NDWI_25','NDWI_26','NDWI_27','NDWI_28','NDWI_29','NDWI_30','NDWI_31','NDWI_32','NDWI_33','NDWI_34']);
// var VABands = ee.List(['VARI','VARI_1','VARI_2','VARI_3','VARI_4','VARI_5','VARI_6','VARI_7','VARI_8','VARI_9','VARI_10','VARI_11','VARI_12','VARI_13','VARI_14','VARI_15','VARI_16','VARI_17','VARI_18','VARI_19','VARI_20','VARI_21','VARI_22','VARI_23','VARI_24','VARI_25','VARI_26','VARI_27','VARI_28','VARI_29','VARI_30','VARI_31','VARI_32','VARI_33','VARI_34']);
// var NBBands = ee.List(['NBR2','NBR2_1','NBR2_2','NBR2_3','NBR2_4','NBR2_5','NBR2_6','NBR2_7','NBR2_8','NBR2_9','NBR2_10','NBR2_11','NBR2_12','NBR2_13','NBR2_14','NBR2_15','NBR2_16','NBR2_17','NBR2_18','NBR2_19','NBR2_20','NBR2_21','NBR2_22','NBR2_23','NBR2_24','NBR2_25','NBR2_26','NBR2_27','NBR2_28','NBR2_29','NBR2_30','NBR2_31','NBR2_32','NBR2_33','NBR2_34']);
// var VSBands = ee.List(['VIS1','VIS1_1','VIS1_2','VIS1_3','VIS1_4','VIS1_5','VIS1_6','VIS1_7','VIS1_8','VIS1_9','VIS1_10','VIS1_11','VIS1_12','VIS1_13','VIS1_14','VIS1_15','VIS1_16','VIS1_17','VIS1_18','VIS1_19','VIS1_20','VIS1_21','VIS1_22','VIS1_23','VIS1_24','VIS1_25','VIS1_26','VIS1_27','VIS1_28','VIS1_29','VIS1_30','VIS1_31','VIS1_32','VIS1_33','VIS1_34']);

var bandNames = ee.List(['B1','B2','B3','B4','B5','B7']);
var VIBands = ee.List(['NDVI','NDVI_1','NDVI_2','NDVI_3','NDVI_4','NDVI_5','NDVI_6','NDVI_7','NDVI_8','NDVI_9','NDVI_10','NDVI_11','NDVI_12','NDVI_13','NDVI_14','NDVI_15','NDVI_16','NDVI_17']);//,'NDVI_18','NDVI_19','NDVI_20','NDVI_21','NDVI_22','NDVI_23','NDVI_24','NDVI_25','NDVI_26','NDVI_27','NDVI_28','NDVI_29','NDVI_30','NDVI_31','NDVI_32','NDVI_33','NDVI_34']);
var WIBands = ee.List(['NDWI','NDWI_1','NDWI_2','NDWI_3','NDWI_4','NDWI_5','NDWI_6','NDWI_7','NDWI_8','NDWI_9','NDWI_10','NDWI_11','NDWI_12','NDWI_13','NDWI_14','NDWI_15','NDWI_16','NDWI_17']);//,'NDWI_18','NDWI_19','NDWI_20','NDWI_21','NDWI_22','NDWI_23','NDWI_24','NDWI_25','NDWI_26','NDWI_27','NDWI_28','NDWI_29','NDWI_30','NDWI_31','NDWI_32','NDWI_33','NDWI_34']);

var sensor_band_dict =ee.Dictionary({
    L5 : ee.List([0,1,2,3,4,5]),
    L7 : ee.List([0,1,2,3,4,5]),
    L8 : ee.List([1,2,3,4,5,6]),
    VI : ee.List([6,14,22,30,38,46,54,62,70,78,86,94,102,110,118,126,134,142]),//,150,158,166,174,182,190,198,206,214,222,230,238,246,254,262,270,278]),
    WI : ee.List([7,15,23,31,39,47,55,63,71,79,87,95,103,111,119,127,135,143]),//,151,159,167,175,183,191,199,207,215,223,231,239,247,255,263,271,279]),
    
    
    
    
    // VI : ee.List([6,14,22,30,38,46,54,62,70,78,86,94,102,110,118,126,134,142,150,158,166,174,182,190,198,206,214,222,230,238,246,254,262,270,278]),
    // WI : ee.List([7,15,23,31,39,47,55,63,71,79,87,95,103,111,119,127,135,143,151,159,167,175,183,191,199,207,215,223,231,239,247,255,263,271,279]),
    
    // VI : ee.List([6,17,28,39,50,61,72,83,94,105,116,127,138,149,160,171,182,193,204,215,226,237,248,259,270,281,292,303,314,325,336,347,358,369,380]),
    // WI : ee.List([7,18,29,40,51,62,73,84,95,106,117,128,139,150,161,172,183,194,205,216,227,238,249,260,271,282,293,304,315,326,337,348,359,370,381]),
    // VA : ee.List([8,19,30,41,52,63,74,85,96,107,118,129,140,151,162,173,184,195,206,217,228,239,250,261,272,283,294,305,316,327,338,349,360,371,382]),
    // NB : ee.List([9,20,31,42,53,64,75,86,97,108,119,130,141,152,163,174,185,196,207,218,229,240,251,262,273,284,295,306,317,328,339,350,361,372,383]),
    // VS : ee.List([10,21,32,43,54,65,76,87,98,109,120,131,142,153,164,175,186,197,208,219,230,241,252,263,274,285,296,307,318,329,340,351,362,373,384])
});

print(sensor_band_dict);

var k = ee.Kernel.fixed(41, 41, 
[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
);

var runDefringe = true;//Whether to run defringe algorithm on L5 and L7
var fringeCountThreshold = 279;//Define number of non null observations for pixel to not be classified as a fringe

var crs = 'EPSG:4326'; //Projection info for export
var outNoData = -99; //Null value on export

//degree to radians and then normalize using division by 1.5708, the highest possible slope value in radians
function radians(img) {
  return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();
}

//Algorithm to mask fringes in L5 and L7
function defringeLandsat(img){
  //Find any pixel without
  var m = img.mask().reduce(ee.Reducer.min());
  var sum = m.reduceNeighborhood(ee.Reducer.sum(), k, 'kernel');
  sum = sum.gte(fringeCountThreshold);
  img = img.mask(img.mask().and(sum));
  return img;
}

//to convert bands from Int16 to float values
function bandFloat(img) {
  return img.toFloat().divide(10000);
}

//Function for adding common indices
function addIndices(in_image){
  in_image = in_image.addBands(in_image.normalizedDifference(['B4', 'B3']).select([0],['NDVI']));
  in_image = in_image.addBands(in_image.normalizedDifference(['B4', 'B7']).select([0],['NDWI']));
  // in_image = in_image.addBands(in_image.normalizedDifference(['B2', 'B3']).select([0],['VARI']));
  // in_image = in_image.addBands(in_image.normalizedDifference(['B4', 'B5']).select([0],['NBR2']));
  // in_image = in_image.addBands(in_image.normalizedDifference(['B3', 'B1']).select([0],['VIS1']));
  return in_image;
}

//mask using cfmask
function mask_sr(image_sr) {
  var mask_band = image_sr.select('cfmask').eq(0);
  return image_sr.mask(mask_band);
}

//Function for gathering, cloud masking, and cloud shadow masking Landsat imagery
function LEDAPScfmaskImages(startDate,endDate,startJulian,endJulian){
  
  //Get L7 images      
  var l7 = ee.ImageCollection('LANDSAT/LE7_SR')
        .filterDate(startDate,endDate)
        .filter(ee.Filter.calendarRange(startJulian,endJulian))
        .filterBounds(studyarea)

        //May or may not want to run defringe on L7
      //  if(runDefringe === true){
      //    print('Running defringe on L7')
      //     l7 = l7.map(defringeLandsat);
      // }
        //Mask clouds, water, cloud shadows, snow
        l7 = l7.map(mask_sr)
        .select(sensor_band_dict.get('L7'),bandNames)
        .map(bandFloat);
  
  //Get L5 images and bust clouds
  var l5 = ee.ImageCollection('LANDSAT/LT5_SR')
        .filterDate(startDate,endDate)
        .filter(ee.Filter.calendarRange(startJulian,endJulian))
        .filterBounds(studyarea)
        .map(mask_sr)
        .select(sensor_band_dict.get('L5'),bandNames)
        .map(bandFloat);
  
  //Get L8 images and bust clouds
  var l8 = ee.ImageCollection('LANDSAT/LC8_SR')
        .filterDate(startDate,endDate)
        .filter(ee.Filter.calendarRange(startJulian,endJulian))
        .filterBounds(studyarea)
        .map(mask_sr)
        .select(sensor_band_dict.get('L8'),bandNames)
        .map(bandFloat);
  
  //Merge collections 
  var ls_1 = ee.ImageCollection(l7.merge(l5));
  var ls = ee.ImageCollection(ls_1.merge(l8));
  // var ls = ee.ImageCollection(l7.merge(l8));
  
  // var ls = ee.ImageCollection(l5); 
  ls = ls.map(addIndices);
  return ls;
}
var nb=ee.Image(ee.ImageCollection(collection)
        .select(sensor_band_dict.get('L8'),bandNames)
        .first()).bandNames().length();

print(nb);


var startDate0 = ee.Date.fromYMD(2014,1,1);
var endDate0 = ee.Date.fromYMD(2014,12,31);

var startDate1 = ee.Date.fromYMD(2015,1,1);
var endDate1 = ee.Date.fromYMD(2015,12,31);

var startDate2 = ee.Date.fromYMD(2016,1,1);
var endDate2 = ee.Date.fromYMD(2016,12,31);



//Parameters

var startJulian0 = 1;
var endJulian0 = 60;

var startJulian1 = 61;
var endJulian1 = 120;

var startJulian2 = 121;
var endJulian2 = 180;

var startJulian3 = 181;
var endJulian3 = 240;

var startJulian4 = 240;
var endJulian4 = 300;

var startJulian5 = 301;
var endJulian5 = 365;

//Descriptive name for export
/*
var outputName0 = 'CAN_NDVI_1_60_911';
var outputName1 = 'CAN_NDVI_61_120_911';
var outputName2 = 'CAN_NDVI_121_180_911';
var outputName3 = 'CAN_NDVI_181_240_911';
var outputName4 = 'CAN_NDVI_241_300_911';
var outputName5 = 'CAN_NDVI_301_365_911';
*/


//Get all images and cloud and shadow mask them
var allImages0 = LEDAPScfmaskImages(startDate0,endDate0,startJulian0,endJulian0);
var allImages1 = LEDAPScfmaskImages(startDate0,endDate0,startJulian1,endJulian1);
var allImages2 = LEDAPScfmaskImages(startDate0,endDate0,startJulian2,endJulian2);
var allImages3 = LEDAPScfmaskImages(startDate0,endDate0,startJulian3,endJulian3);
var allImages4 = LEDAPScfmaskImages(startDate0,endDate0,startJulian4,endJulian4);
var allImages5 = LEDAPScfmaskImages(startDate0,endDate0,startJulian5,endJulian5);

var allImages6 = LEDAPScfmaskImages(startDate1,endDate1,startJulian0,endJulian0);
var allImages7 = LEDAPScfmaskImages(startDate1,endDate1,startJulian1,endJulian1);
var allImages8 = LEDAPScfmaskImages(startDate1,endDate1,startJulian2,endJulian2);
var allImages9 = LEDAPScfmaskImages(startDate1,endDate1,startJulian3,endJulian3);
var allImages10 = LEDAPScfmaskImages(startDate1,endDate1,startJulian4,endJulian4);
var allImages11 = LEDAPScfmaskImages(startDate1,endDate1,startJulian5,endJulian5);

var allImages12 = LEDAPScfmaskImages(startDate2,endDate2,startJulian0,endJulian0);
var allImages13 = LEDAPScfmaskImages(startDate2,endDate2,startJulian1,endJulian1);
var allImages14 = LEDAPScfmaskImages(startDate2,endDate2,startJulian2,endJulian2);
var allImages15 = LEDAPScfmaskImages(startDate2,endDate2,startJulian3,endJulian3);
var allImages16 = LEDAPScfmaskImages(startDate2,endDate2,startJulian4,endJulian4);
var allImages17 = LEDAPScfmaskImages(startDate2,endDate2,startJulian5,endJulian5);



//number of bands per season image
var nbf=ee.Image(allImages0.first()).bandNames().length();

//percentile for each season
var valper=ee.Reducer.percentile([75]);

var vizParams = {
  bands: ['B4_p75', 'B3_p75', 'B2_p75'],
  //bands: ['B4_p25', 'B3_p25', 'B2_p25'],
  //bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 0.5,
  gamma: [0.9,1, 1.0]
};

var vizParams2 = {
  bands: ['NDVI_2', 'NDVI_3', 'NDVI_4'],
  min: 0,
  max: 0.5,
  gamma: [0.9,1, 1.0]
}; 


//throw ('stop');reduce(valper)
var compImage0 = ee.Image(allImages0.reduce(valper));
var compImage1 = ee.Image(allImages1.reduce(valper));
var compImage2 = ee.Image(allImages2.reduce(valper));
var compImage3 = ee.Image(allImages3.reduce(valper));
var compImage4 = ee.Image(allImages4.reduce(valper));
var compImage5 = ee.Image(allImages5.reduce(valper));
var compImage6 = ee.Image(allImages6.reduce(valper));
var compImage7 = ee.Image(allImages7.reduce(valper));
var compImage8 = ee.Image(allImages8.reduce(valper));
var compImage9 = ee.Image(allImages9.reduce(valper));
var compImage10 = ee.Image(allImages10.reduce(valper));
var compImage11 = ee.Image(allImages11.reduce(valper));
var compImage12 = ee.Image(allImages12.reduce(valper));
var compImage13 = ee.Image(allImages13.reduce(valper));
var compImage14 = ee.Image(allImages14.reduce(valper));
var compImage15 = ee.Image(allImages15.reduce(valper));
var compImage16 = ee.Image(allImages16.reduce(valper));
var compImage17 = ee.Image(allImages17.reduce(valper));


// get the SRTM data and calculate slope
var terrain = ee.Algorithms.Terrain(ee.Image('srtm90_v4'));

// select slope
var slope = radians(terrain.select('slope')); 

//Composite Landsat bands together
var input = ee.Image.cat([compImage0,compImage1,compImage2,compImage3,compImage4,compImage5,compImage6,compImage7,compImage8,compImage9,compImage10,compImage11,compImage12,compImage13,compImage14,compImage15,compImage16,compImage17]);//,compImage18,compImage19,compImage20,compImage21,compImage22,compImage23,compImage24,compImage25,compImage26,compImage27,compImage28,compImage29,compImage30,compImage31,compImage32,compImage33,compImage34]);

var input1=input.clip(studyarea);
var zone5input= input.clip(studyarea);

print(input);
var stddev=ee.Reducer.stdDev();
var maxndvi=ee.Reducer.max();
var minndvi=ee.Reducer.min();


//calculate std dev from ndvi bands
var ndvi_bands=input.select(sensor_band_dict.get('VI'),VIBands);
print('NDVI Bands:',ndvi_bands);
var stdband=ndvi_bands.reduce(stddev).toFloat();
var maxband=ndvi_bands.reduce(maxndvi).toFloat();
var minband=ndvi_bands.reduce(minndvi).toFloat();
var diffband=maxband.subtract(minband).rename('diff');

var FCCimg=ee.ImageCollection([compImage0,compImage1,compImage2,compImage3,compImage4,compImage5,compImage6,compImage7,compImage8,compImage9,compImage10,compImage11,compImage12,compImage13,compImage14,compImage15,compImage16,compImage17]);//,compImage18,compImage19,compImage20,compImage21,compImage22,compImage23,compImage24,compImage25,compImage26,compImage27,compImage28,compImage29,compImage30,compImage31,compImage32,compImage33,compImage34]);
var FCC=FCCimg.max().clip(studyarea);
var FCC2=FCCimg.min().clip(studyarea);
print('FCC',FCC);

Map.addLayer(FCC, vizParams, 'FCC');

//calculate std dev from ndwi bands
var ndwi_bands=input.select(sensor_band_dict.get('WI'),WIBands);
print('NDWI Bands',ndwi_bands);
var stdband2=ndwi_bands.reduce(stddev).toFloat();
//print(stdband, stdband2);



//Map.addLayer(stdband.updateMask(stdband.gt(0.1)),{min:[0],max:[0.5],palette: 'FFFFFF'}, 'STDDEV');
Map.addLayer(stdband,{min:[0],max:[0.25],palette: '000000,FFFFFF'}, 'STDDEV');


input=slope.addBands(ndvi_bands).addBands(ndwi_bands).addBands(stdband).addBands(diffband).addBands(minband).addBands(FCC).addBands(FCC2);//.addBands(maxband).addBands(stdband2).addBands(stdband3).addBands(stdband4);

var input1=input.clip(studyarea);
var zone5input = input.clip(studyarea);




//Map.addLayer(slope, {min:[0],max:[1],palette: '000000,FFFFFF'}, 'slope');

//display input
print('Input image characteristics:',input);
//Map.addLayer(input,{},'INPUT');

var training = input1.sampleRegions({
    collection: TrainingSamples,
  properties: ['label'],
  scale: 30
});

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable',
  fileFormat: 'CSV'
});

//build classifier

var classifier = ee.Classifier.randomForest(100,10).train(training, 'label');

var trained = classifier.train(training, 'label');

print ('Classifier properties:',classifier);

//classify the whole landscape
var classified = zone5input.classify(trained);
var classified_studyarea = classified.clip(studyarea);

//classified = classified.updateMask(classified.eq(1));
var k33 = ee.Kernel.fixed(3, 3,
[
  [1,1,1],
  [1,1,1],
  [1,1,1]
  ]);


//5x5 kernel definition

var k55 = ee.Kernel.fixed(5, 5,
[
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1],
  ]);


//7x7 kernel definition
var k77 = ee.Kernel.fixed(7, 7,
[
  [0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [0,1,1,1,1,1,0],
  [0,0,1,1,1,0,0]
  ]);
  
  //9x9 kernel definition
var k99 = ee.Kernel.fixed(9, 9,
[
  [0,1,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,0]
  ]);


////Export the classified image
var jsonCoordString = studyarea;
Export.image.toDrive({
  image: classified_studyarea,
  scale: 30,
  maxPixels:1e13,
  folder: 'data',
  description: 'cropmask',
region: jsonCoordString, 
});
print('Classified',classified);

//add layer to map
//Map.addLayer(classified.updateMask(classified.eq(1)), {palette: '00FF00'}, 'croplandmask_zone5oct7_1');

var validation = classified_studyarea.reduceRegions(TestSamples,ee.Reducer.mode(),30);
print('validation', validation);

Export.table.toDrive({
  collection: validation,
  description: 'validation',
  fileFormat: 'CSV'
});