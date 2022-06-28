Narrator.addNarration({
	file: "0_intro",
	markers:{
		"intro0": ["0:00.0", "0:03.0"], // So, I always used to get anxiety.
		"intro1": ["0:03.0", "0:05.7"], // Then I would get anxiety ABOUT getting anxiety.
		"intro2": ["0:05.7", "0:08.0"], // It was anxiety all the way
		"intro3": ["0:08.0", "0:09.0"], // down.

		"prop0": ["0:15.0", "0:16.3"], // Hi, I'm Nicky Case,
		"prop1": ["0:16.3", "0:19.6"], // and this is an interactive explanation about neurons.
		"prop2": ["0:22.0", "0:23.5"], // Yup! You can actually interact with this,
		"prop3": ["0:23.5", "0:25.4"], // ♬ so why don't you try that thing ♬
		"prop4": ["0:25.4", "0:27.8"], // and click on a neuron, and see what happens?

		"prop5": ["0:29.0", "0:31.7"], // Ex-CUSE me, I was talking!... I'm just kidding.

		"prop6": ["0:33.0", "0:35.4"], // Okay, wow, you're really into this, clicking EVERYTHING,
		"prop7": ["0:35.4", "0:36.5"], // COOL. GOT IT. AWESOME.

		"prop8": ["0:38.0", "0:38.7"], // Yeah!
		"prop8.5": ["0:38.7", "0:40.5"], // Watch how the signals propagate down,
		"prop9": ["0:40.5", "0:42.6"], // from neuron to neuron to neuron.
		"prop10": ["0:45.0", "0:46.1"], // Try clicking some more.

		"prop11": ["0:48.0", "0:50.3"], // Of course, this is a simplified model,
		"prop12": ["0:50.3", "0:52.2"], // but that's roughly how neurons work.
		"prop13": ["0:52.2", "0:54.7"], // One thought fires the next, and so on,
		"prop14": ["0:54.7", "0:57.3"], // but... in the ANXIOUS brain...

		"fear0": ["0:57.5", "0:59.2"], // THIS is what happens.
		"fear1": ["1:00.0", "1:03.0"], // Innocent thoughts connect to anxious thoughts.
		"fear2": ["1:03.0", "1:08.1"], // Personally, I used to be so afraid of being seen as a failure,
		"fear3": ["1:08.1", "1:10.2"], // of being close to people,
		"fear4": ["1:10.2", "1:11.3"], // and of...
		"fear5": ["1:11.3", "1:12.0"], // holes.
		"fear6": ["1:12.0", "1:15.5"], // Coz... I don't know why, but tightly clustered holes
		"fear7": ["1:15.5", "1:18.5"], // just kinda creep me out, y'know? I dunno.

		"mesmerizing": ["1:20.0", "1:22.2"], // Kind of mesmerizing, isn't it?

	}
});

var level_intro='{"neurons":[[-100,-50,0], [-100,100,-1], [400,-50,2], [400,100,-1], [900,-50,4], [900,100,-1], [400, 250, -1], [-100,550,1], [400,550,3], [900,550,5], [400, 400, -1]],"connections":[[0, 1, 40], [2, 3, 40], [4, 5, 40], [1, 6, 40], [3, 6, 40], [5, 6, 40], [10, 7, 40], [10, 8, 40], [10, 9, 40], [6, 10, 100]],"flows":[ {"0":{"1":30},"1":{"6":30},"6":{"10":30},"10":{"7":30}},{"2":{"3":30},"3":{"6":30},"6":{"10":30},"10":{"8":30}},{"4":{"5":30},"5":{"6":30},"6":{"10":30},"10":{"9":30}}],"initial":[30, 30, 30],"optimal":[30, 30, 30],"phases":[0,12,5],"utilit_sol":80,"enabled_controls":false}';
//var level_intro='{"neurons":[[-100,0,0], [-100,150,-1], [400,0,2], [400,150,-1], [900,0,4], [900,150,-1], [400, 300, -1], [-100,600,1], [400,600,3], [900,600,5], [400, 450, -1]],"connections":[],"flows":[{"0":{}}, {"2":{}}, {"6":{}}],"initial":[0, 0, 0],"optimal":[120, 120, 120],"phases":[0,0,0],"utilit_sol":300,"enabled_controls":false}';


var level_map_1='{"neurons":[[-100,-50,0], [-100,100,-1], [400,-50,2], [400,100,-1], [900,-50,4], [900,100,-1], [400, 250, -1], [-100,550,1], [400,550,3], [900,550,5], [400, 400, -1]],"connections":[[0, 1, 70], [2, 3, 30], [4, 5, 20], [1, 6, 30], [3, 6, 30], [5, 6, 30], [10, 7, 100], [10, 8, 100], [10, 9, 100], [6, 10, 100]],"flows":[{"0":{"1":0},"1":{"6":0},"6":{"10":0},"10":{"7":0}},{"2":{"3":0},"3":{"6":0},"6":{"10":0},"10":{"8":0}},{"4":{"5":0},"5":{"6":0},"6":{"10":0},"10":{"9":0}}],"initial":[0, 0, 0],"optimal":[30, 30, 20],"phases":[0,12,5],"utilit_sol":80,"enabled_controls":true}';

var level_map_2='{"neurons":[[-100,-50,0], [-100,100,-1], [900,-50,2], [900,100,-1], [400, 250, -1], [-100,550,1], [900,550,3], [400, 400, -1]],"connections":[[0, 1, 100], [2, 3, 100], [1, 4, 100], [3, 4, 100], [7, 5, 100], [7, 6, 100], [4, 7, 100]],"flows":[{"0":{"1":100},"1":{"4":100},"4":{"7":100},"7":{"5":100}},{"2":{"3":0},"3":{"4":0},"4":{"7":0},"7":{"6":0}}],"initial":[100, 0],"optimal":[50, 50],"phases":[0,8],"utilit_sol":100,"enabled_controls":true}';

var level_map_3='{"neurons":[[-110, 350, 0], [90, 350, -1], [90,100, 2], [290,350,-1], [290,100,3], [510,350,-1],[510,100,4],[710,350,-1],[710,100,5], [910,350,1]],"connections":[[0,1,100],[1,3,100], [3,5,100], [5,7,100], [7,9,100], [2,1,100], [3,4,100], [6,5,100], [7,8,100]],"flows":[{"0":{"1": 0},"1":{"3":0}, "3":{"5":0}, "5":{"7":0}, "7":{"9":0}}, {"2":{"1":100}, "1":{"3":100}, "3":{"4":100}}, {"6":{"5":100}, "5":{"7":100}, "7":{"8":100}}],"initial":[0, 100, 100],"optimal":[34, 66, 66],"phases":[8, 0, 0],"utilit_sol":200,"enabled_controls":false}';
// true optimal: :[33.33, 66.67, 66.67]

var level_map_4='{"neurons":[[-110, 200, 0], [90, 200, -1], [90,-50, 2], [290,200,-1], [290,-50,3], [510,200,-1],[510,-50,4],[710,200,-1],[710,-50,5], [910,200,1], [290, 442, 6], [510, 442, 7]],"connections":[[0,1,100],[1,3,100], [3,5,100], [5,7,80], [7,9,100], [2,1,100], [3,4,60], [6,5,100], [7,8,100], [10, 3, 100], [5, 11, 100]],"flows":[{"0":{"1": 45},"1":{"3":45}, "3":{"5":45}, "5":{"7":45}, "7":{"9":45}}, {"2":{"1":45}, "1":{"3":45}, "3":{"4":45}}, {"6":{"5":35}, "5":{"7":35}, "7":{"8":35}}, {"10":{"3": 45},"3":{"5":45}, "5":{"11":45}}],"initial":[45, 55, 35, 55],"optimal":[30, 60, 50, 70],"phases":[8, 0, 0, 0],"utilit_sol":240,"enabled_controls":true}';
//true optimal [29.45, 60, 50.55, 70.55]

var level_map_5='{"neurons":[[700,270,1], [60,270,7], [154,44,6], [606,496,0], [380,590,4], [380,-50,5], [606,44,3], [154,496,2]], "connections":[[2,4,70],[4,6,80], [6,1,80], [1,3,100], [3,5,60], [5,7,50], [7,0,70], [0,2,30]],"flows":[{"3":{"5": 50}, "5":{"7": 50},"7":{"0": 50}},{"7":{"0": 0},"0":{"2": 0},"2":{"4": 0},"4":{"6": 0}},{"4":{"6": 10},"6":{"1": 10},"1":{"3": 10},"3":{"5": 10}},{"2":{"4": 70},"4":{"6": 70},"6":{"1": 70}}],"initial":[50, 0, 10, 70],"optimal":[41, 29, 19, 32],"phases":[11, 6, 12, 3],"utilit_sol":130,"enabled_controls":true}';
// true optimal: :[40.975, 29.025, 19.025, 31.95]


var level_map_screensaver='{"neurons":[[700,270,1], [60,270,7], [154,44,6], [606,496,0], [380,590,4], [380,-50,5], [606,44,3], [154,496,2]], "connections":[[2,4,70],[4,6,80], [6,1,80], [1,3,100], [3,5,60], [5,7,50], [7,0,70], [0,2,30]],"flows":[{"3":{"5": 30}, "5":{"7": 30},"7":{"0": 30}},{"7":{"0": 20},"0":{"2": 20},"2":{"4": 20},"4":{"6": 20}},{"4":{"6": 20},"6":{"1": 20},"1":{"3": 20},"3":{"5": 20}},{"2":{"4": 25},"4":{"6": 25},"6":{"1": 25}}],"initial":[30, 20, 20, 25],"optimal":[40.975, 29.025, 19.025, 31.95],"phases":[11, 6, 12, 3],"utilit_sol":130,"enabled_controls":false}';
 


Narrator.addStates({

	INTRO:{
		start:function(state){
			Narrator.scene("Propagation", level_intro);
            Narrator.showCaption("intro0");
            state._listener = subscribe("/mouse/click",function(scene){
                unsubscribe(state._listener);
                Narrator.hideCaption();
                Narrator.goto("LEVEL1");
            });
		}
	},

	LEVEL1:{
		start:function(state){
			//Narrator.scene("Intro")
			Narrator.scene("Propagation", level_map_1)
            Narrator.showCaption("during1");
			state._listener = subscribe("/level/won",function(scene){
                unsubscribe(state._listener);
                Narrator.showCaption("conclusion1");
                state._listener = subscribe("/mouse/click",function(scene){
                    unsubscribe(state._listener);
                    Narrator.hideCaption();
                    Narrator.goto("LEVEL2");
                });
            });
		}
	},

	LEVEL2:{
		start:function(state){
			//Narrator.scene("Intro")
			Narrator.scene("Propagation", level_map_2)
            Narrator.showCaption("during2");
			state._listener = subscribe("/level/won",function(scene){
                unsubscribe(state._listener);
                Narrator.showCaption("conclusion2");
                state._listener = subscribe("/mouse/click",function(scene){
                    unsubscribe(state._listener);
                    Narrator.hideCaption();
                    Narrator.goto("LEVEL3");
                });
            });
		}
	},

	INTRO_1:{
		start:function(state){
			Narrator.scene("Propagation", level_intro);
            Narrator.showCaption("intro1");
            state._listener = subscribe("/mouse/click",function(scene){
                unsubscribe(state._listener);
                Narrator.hideCaption();
                Narrator.goto("INTRO_2");
            });
		}
	},
	INTRO_2:{
		start:function(state){
            Narrator.showCaption("intro2");
            state._listener = subscribe("/mouse/click",function(scene){
                unsubscribe(state._listener);
                Narrator.hideCaption();
                Narrator.goto("INTRO_3");
            });
		}
	},
    
	INTRO_3:{
		start:function(state){
            Narrator.showCaption("intro3");
            state._listener = subscribe("/mouse/click",function(scene){
                unsubscribe(state._listener);
                Narrator.hideCaption();
                Narrator.goto("LEVEL1");
            });
		}
	},


	LEVEL3:{
		start:function(state){
			//Narrator.scene("Intro")
			Narrator.scene("Propagation", level_map_3)
            Narrator.showCaption("during3");
            state._listener = subscribe("/mouse/click",function(scene){
                Narrator.showCaption("during3b");
                unsubscribe(state._listener);
                state._listener = subscribe("/mouse/click",function(scene){
                    publish("/level/enable_controls");
                    unsubscribe(state._listener);
                    state._listener = subscribe("/level/won",function(scene){
                        unsubscribe(state._listener);
                        Narrator.showCaption("conclusion3");
                        state._listener = subscribe("/mouse/click",function(scene){
                            unsubscribe(state._listener);
                            Narrator.showCaption("conclusion3b");
                            state._listener = subscribe("/mouse/click",function(scene){
                                unsubscribe(state._listener);
                                Narrator.hideCaption();
                                Narrator.goto("LEVEL4");
                            });
                        });
                    });
                });
            });
		}
	},

	LEVEL4:{
		start:function(state){
			//Narrator.scene("Intro")
			Narrator.scene("Propagation", level_map_4)
            Narrator.showCaption("during4");
			state._listener = subscribe("/level/won",function(scene){
                unsubscribe(state._listener);
                Narrator.showCaption("conclusion4");
                state._listener = subscribe("/mouse/click",function(scene){
                    unsubscribe(state._listener);
                    Narrator.hideCaption();
                    Narrator.goto("LEVEL5");
                });
            });
		}
	},

	LEVEL5:{
		start:function(state){
			//Narrator.scene("Intro")
			Narrator.scene("Propagation", level_map_5)
            Narrator.showCaption("during5");
			state._listener = subscribe("/level/won",function(scene){
                unsubscribe(state._listener);
                Narrator.showCaption("conclusion5");
                state._listener = subscribe("/mouse/click",function(scene){
                    unsubscribe(state._listener);
                    Narrator.hideCaption();
                    Narrator.goto("SCREENSAVER");
                });
            });
		}
        /*
		during:function(state){
			if(state._ticker>0){
				state._ticker--;
			}
		}
        */
    },

	SCREENSAVER:{
		start:function(state){
			//Narrator.scene("Intro")
			Narrator.scene("Propagation", level_map_screensaver)
            Narrator.showCaption("screensaver");
            state._listener = subscribe("/mouse/click",function(scene){
                unsubscribe(state._listener);
                Narrator.hideCaption();
                Narrator.goto("INTRO");
            });
		}
	},

    
    /*
	PROP_INTERRUPTABLE:{
		start:function(state){
			Narrator.talk("prop0","prop1","prop2").goto("PROP_CLICK");
			state._listener = subscribe("/neuron/click",function(neuron){
				unsubscribe(state._listener);
				Narrator.interrupt().talk("prop5").goto("PROP_EXPLAIN");
			});
		},
		kill:function(state){
			unsubscribe(state._listener);
		}
	},

	PROP_CLICK:{
		start:function(state){
			Narrator.talk("prop3","prop4");
			state._listener = subscribe("/neuron/click",function(neuron){
				unsubscribe(state._listener);
				Narrator.talk("prop8").goto("PROP_EXPLAIN");
			});
		},
		kill:function(state){
			unsubscribe(state._listener);
		}
	},

	PROP_EXPLAIN:{
		start:function(state){
			Narrator.goto("PROP_CLICK_MORE");
		}
	},	

	PROP_CLICK_MORE:{
		start:function(state){

			state._ticker = -1;
			state._clicked = 0;
			state._listener = subscribe("/neuron/click",function(neuron){
				
				if(state._ticker<0) state._ticker=40;
				state._clicked++;
				if(state._clicked==3){
					if(state._ticker>0){
						Narrator.wait(0.5).talk("prop6","prop7").goto("FEAR");
					}else{
						Narrator.wait(1.0).goto("FEAR");
					}
				}

			});

		}
        ,
		during:function(state){
			if(state._ticker>0){
				state._ticker--;
			}
		}
	}
    */

});

