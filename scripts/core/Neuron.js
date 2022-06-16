function Neuron(scene){

	var self = this;

	// Transform
	self.x = 0;
	self.y = 0;
	self.nx = 0;
	self.ny = 0;
	self.scale = 1;
	self.rotation = Math.random()*Math.PI*2;
	//self.iconRotation = (Math.random()*2-1)*0.3;

	// Connections & Pulsing
	self.senders = new Map();
	//self.receivers = [];
	self.startingStrength = 3;
    //self.highlight = 0;
    //
    self.sprites = [images.neuron_body, images.server0, images.user0, images.server1, images.user1, images.server2, images.user2, images.server3, images.user3, images.server4, images.user4, images.server5, images.user5]

	// Hebbian
	//self.hebbian = 0;
	//self.hebbianRadius = 200;

	// Flash
	//self.flash = new Flash(self);
	//scene.flashes.push(self.flash);

	// To prevent weakening the connections you JUST made.
	self.strengthenedConnections = [];
    /*
	self.strengthenHebb = function(){

		// Hebbian highlight!
		self.hebbian = 1;
		//self.flash.pulse();

		// Find NOT-THIS-ONE neurons with hebbians, strengthen the connection from them to this.
		// There MUST be a connection initialized before.
		var neurons = scene.neurons;
		for(var i=0;i<neurons.length;i++){
			var neuron = neurons[i];

			// Is actually hebb-activated and is NOT self.
			if(neuron.hebbian>0 && neuron!=self){

				// And is close enough
				var dx = neuron.x-self.x;
				var dy = neuron.y-self.y;
				var radius = self.hebbianRadius;
				if(dx*dx+dy*dy<radius*radius){

					// Good! This neuron is accepting hebbian connections.
					// Find a connection FROM that TO this.
					var foundConnection = false;
					var connections = scene.connections;
					for(var j=0;j<connections.length;j++){
						var connection = connections[j];
						if(connection.from==neuron && connection.to==self){
							connection.strengthen();
							neuron.strengthenedConnections.push(connection);
							foundConnection = true;
						}
					}

					// If no such connection, MAKE one.
					if(!foundConnection){
						var connection = new Connection();
						connection.connect(neuron,self);
						connection.strengthen();
						connections.push(connection);
						neuron.strengthenedConnections.push(connection);
					}

				}

			}
		}

	};

	self.weakenHebb = function(){

		// Get all sender connections that AREN'T the ones we just strengthened
		var weakenThese = self.senders.filter(function(sender){
			for(var i=0;i<self.strengthenedConnections.length;i++){
				if(sender==self.strengthenedConnections[i]){
					return false;
				}
			}
			return true;
		});

		// Weaken them all
		for(var i=0;i<weakenThese.length;i++){
			weakenThese[i].weaken();
		}

		// Reset Strengthened Connections
		self.strengthenedConnections = [];

	};
    */

	self.pulse = function(signal,FAKE){
		// It should lose strength in the neuron
		// If there's no passed-on signal, create a brand new one.
		if(signal){
		}else{
			signal = {
				strength: self.startingStrength,
                type: Math.floor(self.type/2), // pair type
			};
			//if(!FAKE){
			//	//self.strengthenHebb();
			//}
		}

		// Sound Effect!
        /*
		if(!FAKE){
			var volume = (signal.strength+1)/(self.startingStrength+1); // so it's not zero
			createjs.Sound.play("sfx_spark",{volume:volume*0.6});
		}
        */

		// Smoosh
		//self.smooshVelocity += 0.05*(signal.strength+1);

		// Highlight!
		//self.highlight = 1;

		neighs = scene.flows[signal.type].get(self.id.toString());
        if(neighs){
            for (const [key, value] of Object.entries(neighs)) {
                sender = self.senders.get(key);
                if(sender){
                    sender.pulse({
                        strength: signal.strength,
                        type: signal.type,
                        flow: value
                    });
                }
                else{
                    console.log("key not found in senders")
                }
            }
        }
	}
	
	self.hebbSignalDuration = 2; // 2 seconds, sorta

	// Highlight
	//self.highlightFade = 0.8;

	self.update = function(timer){

        // Fire every second (30 frames)
        if(timer % 15 == self.phase){
            self.pulse();
            //publish("/neuron/click",[self]);
        }

		// Highlight!
		//self.highlight *= self.highlightFade;
		//if(self.highlight<0.01){
		//	self.highlight = 0;
		//}

		// Hebbian update
		//if(self.hebbian>0){
		//	self.hebbian -= 1/(30*self.hebbSignalDuration);
		//	if(self.hebbian<0){
		//		publish("/neuron/weakenHebb",[self]); // too slow!
		//		self.weakenHebb();
		//	}
		//}else{
		//	self.hebbian = 0;
		//}

		// Animation
		self.smoosh += self.smooshVelocity;
		self.smooshVelocity += (1-self.smoosh) * self.smooshSpring;
		self.smooshVelocity *= self.smooshDampening;
		if(self.smoosh>1.5) self.smoosh=1.5;

		// Neuron's Wobbly Position
		//self.wobble += self.wobbleVelocity*0.05;
		var scale = self.scale*self.smoosh;
		self.nx = self.x //+ Math.cos(self.wobble)*self.wobbleRadius*scale*20;
		self.ny = self.y //+ Math.sin(self.wobble)*self.wobbleRadius*scale*20;

		//// Mouse
		//var gotoHoverAlpha = 0;
		//if(self.isMouseOver()){
		//	canvas.style.cursor = "pointer";
		//	gotoHoverAlpha = 1;
		//}else{
		//	gotoHoverAlpha = 0;
		//}
		//self.hoverAlpha = self.hoverAlpha*0.5 + gotoHoverAlpha*0.5;


	};

	// CLICK & HOVER
	//self.hoverAlpha = 0;
    /*
	self.isMouseOver = function(){

		// Refractory period!
		//if(self.hebbian>0) return;

		// If so, is it within that circle?
		var dx = Mouse.x-self.x;
		var dy = Mouse.y-self.y;
		var r = 60*self.scale;
		return (dx*dx+dy*dy<r*r);

	};
	self.listener = subscribe("/mouse/down",function(){
		if(self.isMouseOver()){
			self.pulse();
			//publish("/neuron/click",[self]);
		}
	});

	self.kill = function(){
		unsubscribe(self.listener);
	};
    */


	// Animation
	self.smoosh = 1;
	self.smooshVelocity = 0;
	self.smooshSpring = 0.4;
	self.smooshDampening = 0.64;
	//self.wobble = Math.random()*Math.PI*2;
	//self.wobbleRadius = Math.random();
	//self.wobbleVelocity = Math.random()*2-1;
	self.ticker = 0;

	// Highlight
	self.highlightRadius = 25;
	self.highlightFill = "#fff";
	self.highlightBaseAlpha = 0.5;

	self.draw = function(ctx){

		// save
		ctx.save();

		// translate
		ctx.translate(self.nx,self.ny);

		// Draw NEURON 
		var scale = self.scale*self.smoosh;
		ctx.save();
		ctx.scale(scale,scale);
		//if(self.hebbian>0){
		//	self.ticker++;
		//	var wobbledScale = (1-Math.sin(self.ticker)*0.05);
		//	ctx.scale(wobbledScale,wobbledScale);
		//}

		// Body, hover, highlight.
		ctx.save();
		//ctx.rotate(self.rotation);
		//ctx.globalAlpha = self.hoverAlpha;
		//ctx.drawImage(images.neuron_hover,-60,-60);
		ctx.globalAlpha = 1;
        ctx.drawImage(self.sprites[self.type+1],-50,-50);
		//ctx.globalAlpha = self.highlight;
		//ctx.drawImage(images.neuron_highlight,-50,-50);
		ctx.restore();

		// Icon, with its own rotation
		if(self.icon){
			//ctx.rotate(self.iconRotation);
			ctx.drawImage(self.icon,-50,-50);
		}

		ctx.restore();

		// highlight circle!
		//if(self.highlight>=0.01){
		//	ctx.globalAlpha = self.highlight*self.highlightBaseAlpha;
		//	ctx.fillStyle = self.highlightFill;
		//	ctx.beginPath();
		//	var radius = 25 + (1-self.highlight)*self.highlightRadius;
		//	ctx.arc(0, 0, radius, 0, 2*Math.PI, false);
		//	ctx.fill();
		//}

		// restore
		ctx.restore();

	};

};

Neuron.add = function(x,y,type,scene){

	scene = scene || Interactive.scene;

	// Create the neuron
	var neuron = new Neuron(scene);
	neuron.x = x;
	neuron.y = y;
	neuron.scale = 0.75;
    neuron.type = type
	neuron.clickable = true;

    // -1 means it never fires
    neuron.phase = type >= 0 && type % 2 == 0 ? scene.phases[type/2] : -1;

	// Push it
	var neurons = scene.neurons;
	neurons.push(neuron);

	// For serialization: ID
	neuron.id = neurons.length-1;

	// Return that neuron
	return neuron;
	
};

Neuron.serialize = function(scene,detailed){
    // DAVID: I think we don't need this since this is basically used to save the state to come back later
    // If we do need it, then we should save the flows.

	scene = scene || Interactive.scene;

	// Prepare output
	var output = {
		neurons:[], // [x,y], [x,y], [x,y]...
		connections:[], // [from,to], [from,to], [from,to]...
					   //  or... [from,to,strength]...
        flows:[] // list of maps. The i-th map contains the adjacency matrix of the flow of info for the i-th user-server pair. So flows[i][node_idx] returns a list pairs [index,info] indicating that node `node_idx` is connected to `index` and is sending information of the `i`-th pair through the network and `info` is how much information is transmitted through that link.
        // This variable will be updated every time a slider is moved, but it starts with some initial assignment, which is at scene.flows
	};

	// Get positions of all neurons
	var neurons = scene.neurons;
	for(var i=0;i<neurons.length;i++){
		var neuron = neurons[i];
		output.neurons.push([Math.round(neuron.x),Math.round(neuron.y)]);
	}

	// Get all connections, and the IDs of the neurons they're connected to.
	var connections = scene.connections;
	for(var i=0;i<connections.length;i++){
		var connection = connections[i];
		if(detailed){
			output.connections.push([connection.from.id, connection.to.id, connection.strength]);
		}else{
			output.connections.push([connection.from.id, connection.to.id]);
		}
	}

    /*
    // DAVID: I haven't tested this code. Most likely, we  won't need it.
	var flows = scene.flows;
	for(var i=0;i<flows.length;i++){
        output.flows.push(Object.fromEntries(flows[i]));
	}
    */
    

	// Return the string.
	return JSON.stringify(output);

};

Neuron.load_scene_data = function(scene,string,detailed){

    scene.neurons = [];
    scene.connections = [];
    scene.flows = [];

	// Prepare input
	var input = JSON.parse(string);
    scene.phases = input.phases; // just to emit the balls at different phases


	// Create neurons
	for(var i=0;i<input.neurons.length;i++){
		var neuron = input.neurons[i];
        //neuron[2] is type
		Neuron.add(neuron[0], neuron[1], neuron[2], scene);
	}

	// Create connections
	var neurons = scene.neurons;
	for(var i=0;i<input.connections.length;i++){
		var connection = input.connections[i];
        //connection[2] is capacity
		var newConnection = Connection.add(neurons[connection[0]], neurons[connection[1]], connection[2], scene);
		if(detailed){
			newConnection.strength = connection[2];
		}
	}

    //Create flows
	for(var i=0;i<input.flows.length;i++){
		var flow = input.flows[i];
        scene.flows.push(new Map(Object.entries(flow)));
	}


    scene.enabled_controls = input.enabled_controls;

    if(scene.enabled_controls){
        console.log("asdf");
        Neuron.enable_controls(scene, input);
        console.log("asdf2");
    }
    else{
        scene._listener_controls = subscribe("/level/enable_controls",function(){
            Neuron.enable_controls(scene, scene.level_data);
            unsubscribe(scene._listener_controls);
            scene._listener_controls = null;
        });
    }
    scene.optimal = input.optimal; // Optimal (approximate) values. It is important that our approximate solution is feasible, otherwise we might not have a feasible solution being in the ell-infinity box \Pi[optimal[i]-eps]. Although our eps is quite large, so probably we won't have any problems in any case.

    if(scene.enabled_controls){
        // We define the oninput of all the sliders
        for(var l=0;l<scene.flows.length;l++){
            document.getElementById("control_volume_slider_"+l.toString()).oninput = function(){
                scene.cap_and_update_happiness(false, this);
                publish('/level/interaction');
            }; 
        }

        // Set initial happiness and cap if we made a mistake when setting the initial values
        scene.cap_and_update_happiness(true);
    }


    return input;

};


Neuron.enable_controls = function(scene, input){
    controls = document.getElementById("controls");
    for(var i=0;i<input.initial.length;i++){
        controls.innerHTML += `<input class="control_volume_slider" id="control_volume_slider_${i}" style="--img-path:url(\'./../assets/ui/sad.png\')" type="range" orient="vertical" min="0" max="100" step="${window.Narrator._GLOBAL_.eps}" value="${input.initial[i]}" />`;
    }

    total_util_bar = document.getElementById("total_utility")
    sum = input.utilit_sol;
    for(var i=0;i<input.initial.length;i++){
        sum -= input.initial[i];
    }
    colors = ['#f00', '#0f0', '#36f','#ff0','#f0f','#0ff','#fff' ];


    total_util_bar.innerHTML += `<div class="vertical-progress" id="util_background" style="background-color: #ddd; height:${100*sum/input.utilit_sol}%;"></div>`;
    for(var i=0;i<input.initial.length;i++){
        total_util_bar.innerHTML += `<div class="vertical-progress" id="util_${i}" style="background-color: ${colors[i]}; height:${100*input.initial[i]/input.utilit_sol}%;"></div>`;
    }
    scene.utilit_sol = input.utilit_sol;

    if(!scene.enabled_controls){
        // We define the oninput of all the sliders
        for(var l=0;l<scene.flows.length;l++){
            document.getElementById("control_volume_slider_"+l.toString()).oninput = function(){
                scene.cap_and_update_happiness(false, this);
                publish('/level/interaction');
            }; 
        }

        // Set initial happiness and cap if we made a mistake when setting the initial values
        scene.cap_and_update_happiness(true);
    }
    scene.enabled_controls = true;

};

