//Each length-3 array of a node represents [x, y, type] it positions' coordinates and the index of their type (-1 for grey, meaning it doesn't belong to a pair server-user, and then type//2 refers to a different pair, which uses a different color and type % 2 == 0 means it is a server, and otherwise it is a user)
//
// Each connection represents a drawn connection. The format is [node0, node1, capacity]. The width of a connection depends on the capacity
//var NEURONS_SERIALIZED='{"neurons":[[-92,-72,0],[-24,75,1],[-57,199,2],[-77,304,-1],[-76,405,-1],[-65,538,-1],[-81,696,-1],[45,-72,-1],[56,84,-1],[27,205,-1],[35,321,3],[91,433,-1],[32,521,-1],[89,659,-1],[208,-35,-1],[153,57,-1],[186,214,-1],[152,269,-1],[174,384,-1],[149,558,-1],[193,675,-1],[266,-90,-1],[273,85,-1],[276,158,-1],[300,324,-1],[288,424,-1],[330,573,-1],[284,687,-1],[452,-28,-1],[431,87,-1],[412,206,-1],[452,287,-1],[387,387,-1],[395,539,-1],[401,628,-1],[518,-80,-1],[570,65,-1],[542,146,-1],[558,318,-1],[522,447,-1],[513,527,-1],[505,637,-1],[661,-83,-1],[656,54,-1],[678,213,-1],[654,294,-1],[660,430,-1],[676,541,-1],[648,669,-1],[780,-81,-1],[752,64,-1],[808,201,-1],[799,330,-1],[746,420,-1],[808,522,-1],[779,657,-1],[892,-81,-1],[881,75,-1],[874,171,-1],[907,319,-1],[883,455,-1],[920,514,-1],[889,682,-1],[1009,-76,-1],[992,94,-1],[997,201,-1],[1008,325,-1],[1046,387,-1],[1016,565,-1],[1018,635,-1]],"connections":[[25,32,26],[44,45,68],[35,42,98],[38,44,88],[31,38,20],[9,17,53],[27,34,55],[32,39,53],[16,22,82],[18,19,85],[5,12,86],[38,46,85],[13,19,12],[15,16,45],[6,13,52],[47,48,10],[16,24,22],[42,43,49],[51,57,54],[46,52,48],[39,46,20],[23,29,31],[7,14,22],[24,30,29],[44,51,22],[12,13,86],[51,59,31],[46,54,54],[45,46,68],[36,43,33],[50,51,26],[51,52,26],[46,47,18],[4,11,32],[14,21,56],[31,37,51],[9,16,28],[19,20,64],[10,17,87],[24,25,93],[37,44,71],[54,60,74],[56,57,31],[25,33,62],[42,49,23],[26,34,27],[60,66,58],[31,39,49],[1,7,42],[34,41,41],[25,26,76],[16,23,68],[21,22,60],[12,19,47],[60,68,99],[61,67,90],[17,18,11],[8,15,48],[2,8,19],[28,36,48],[64,65,73],[58,64,87],[5,6,93],[18,25,15],[51,58,82],[61,69,14],[23,30,89],[2,10,40],[28,29,49],[36,42,46],[56,63,75],[4,10,61],[61,62,70],[2,3,81],[48,55,56],[30,37,57],[3,4,38],[22,29,75],[17,24,97],[34,40,67],[36,37,84],[63,64,72],[54,61,68],[13,20,47],[59,60,90],[60,67,27],[44,50,22],[0,1,34],[46,53,15],[40,46,16],[11,19,69],[28,35,48],[16,18,72],[7,15,22],[24,31,58],[33,34,72],[43,44,18],[44,52,72],[61,68,19],[20,27,62],[2,9,64],[57,64,60],[7,8,99],[53,60,75]],"flows":[{"0":{"1": 34},"1":{"7": 34},"7":{"14":22,"15":12}},{"2":{"10":40},"10":{"17":40}}]}';



// lvl 2 is already a classic
var NEURONS_SERIALIZED='{"neurons":[[70, 200, 0], [200, 200, -1], [200,100, 2], [300,200,-1], [300,100,3], [412,200,-1],[412,100,4],[512,200,-1],[512,100,5], [630,200,1]],"connections":[[0,1,100],[1,3,100], [3,5,100], [5,7,100], [7,9,100], [2,1,100], [3,4,100], [6,5,100], [7,8,100]],"flows":[{"0":{"1": 50},"1":{"3":50}, "3":{"5":50}, "5":{"7":50}, "7":{"9":50}}, {"2":{"1":50}, "1":{"3":50}, "3":{"4":50}}, {"6":{"5":50}, "5":{"7":50}, "7":{"8":50}}]}';
// For this test I am sending info that is half of the capacity 


 
//function Scene_Hebbian(){
//
//	var self = this;
//	BrainScene.call(self);
//
//	// Camera
//	self.setCamera(480, 270, 1);
//	
//	// Whee! One that looks nice & uniform and no "boring" neurons
//	Neuron.unserialize(self,NEURONS_SERIALIZED,true);
//
//	// Modify all connections: already done
//	for(var i=0;i<self.connections.length;i++){
//		var c = self.connections[i];
//		c.strengthEased = 1;
//	}
//
//	// Scene Messages
//	var _listener1 = subscribe("/scene/removeConnections",function(){
//		unsubscribe(_listener1);
//		for(var i=0;i<self.connections.length;i++){
//			self.connections[i].strength = 0;
//		}
//	});
//	var _listener2 = subscribe("/scene/addHebb",function(){
//		unsubscribe(_listener2);
//		self.sprites.push(new HebbWords("hebb"));
//		self.sprites.push(new HebbComic("hebb"));
//	});
//	var _listener3 = subscribe("/scene/addAntiHebb",function(){
//		unsubscribe(_listener3);
//		self.sprites.push(new HebbWords("antihebb"));
//		self.sprites.push(new HebbComic("antihebb"));
//	});
//
//	// Scene Transitions
//	self.transitionIn = function(){
//		self.cameraEased.x = 1600;
//	};
//	self.transitionOut = function(){
//		self.camera.x = 1600;
//		return function(){return (self.cameraEased.x>1600);}; // done when this is
//	};
//
//	//////////////////////////////////
//	// SPRITES AND ANIMATIONS STUFF //
//	//////////////////////////////////
//
//	function HebbComic(type){
//
//		var self = this;
//		Sprite.call(self,{
//			pivotX:0, pivotY:0,
//			spritesheet: (type=="hebb") ? images.hebb : images.antihebb,
//			frameWidth:260, frameHeight:400,
//			frameTotal:1
//		});
//
//		// Start Off
//		self.y = 50;
//		if(type=="hebb"){
//			self.x = -260;
//			self.gotoX = 0;
//		}else{
//			self.x = 960;
//			self.gotoX = 700;
//		}
//		
//		// UPDATE
//		var _prevUpdate = self.update;
//		self.update = function(){
//			self.x = self.x*0.7 + self.gotoX*0.3;
//			_prevUpdate.call(self);
//		};
//
//	}
//
//	function HebbWords(type){
//
//		var self = this;
//		Sprite.call(self,{
//			pivotX:0, pivotY:0,
//			spritesheet: (type=="hebb") ? images.hebb_words : images.antihebb_words,
//			frameWidth:440, frameHeight:240,
//			frameTotal:1
//		});
//
//		// Start Off
//		self.y = 130;
//		if(type=="hebb"){
//			self.x = -440;
//			self.gotoX = 260;
//		}else{
//			self.x = 960;
//			self.gotoX = 260;
//		}
//		
//		// UPDATE
//		self.timer = 3.7 * 30; // A bit over three seconds.
//		var _prevUpdate = self.update;
//		self.update = function(){
//			self.x = self.x*0.7 + self.gotoX*0.3;
//			if(self.timer--<0){
//				self.alpha -= 0.1;
//				if(self.alpha<0){
//					self.alpha=0;
//					self.dead = true;
//				}
//			}
//			_prevUpdate.call(self);
//		};
//
//	}
//
//}

function Scene_Propagation(){

	var self = this;
	BrainScene.call(self);

	// Camera
	self.setCamera(700, 300, 1);
	
	// Whee! One that looks nice & uniform and no "boring" neurons
	Neuron.unserialize(self,NEURONS_SERIALIZED);

	// Scene Transitions
	self.transitionIn = function(){
		self.cameraEased.zoom = 0.2;
	};
	self.transitionOut = function(){
		// NEURONS_SERIALIZED = Neuron.serialize(self,true);
		self.camera.x = 1600; // DAVID: This is just to transition out, it takes you out of the scene, then the scene is killed, a new one is loaded and there is a transition in
		return function(){return (self.cameraEased.x>1600);}; // done when this is
	};

}
