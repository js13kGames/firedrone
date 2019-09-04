"use strict";
// comment
class drone extends cg.entity {
	// comment */
	constructor (scope, name) {
		super();
		this.scope = scope;
		this.name = name;
	}
	
	update (){
		// update the drone's shaking moves ,
		this.state.position.x += (Math.random() - 0.5);
		this.state.position.y += (Math.random() - 0.5);
		// 'DOS' console.log(this.name + ' ' + this.type + ' state:' + JSON.stringify(this.state));
	}
	// comment
	render (){
		var w = this.scope.constants.width,
			h = this.scope.constants.hieght;
		
		// draw the entities ,
		this.scope.context.save();
		this.scope.context.font = '64px Impact';
		this.scope.context.fillText('☄️', (10 + this.state.position.x) , ((w / 2) + this.state.position.x), (w));
		// comment
		this.scope.context.font = '32px Impact';
		this.scope.context.fillText('It\'s working.️', 65, (w / 2), (w));
		this.scope.context.restore();
	}
}