import { clear, print, askQuestion  } from '../ui/console';
import { endAdventure, haveAdventures } from '../..';

/*
const prompt = require("prompt-sync")({ sigint: true });



function printAndChoose(messages:string[],choice:string[],){

	for(;;) {
		clear(true)
		for(let s of messages){
			console.log(s)
		}
		
		console.log(" ")
		
		for(var i = 0;i < choice.length;i++) {
			console.log(i+") "+choice[i])
		}

		console.log(" ")
		let r = prompt("Choose 0 or 1:")
		if((r != 0) && (r != 1)) continue
		return parseInt(r)
	}

	
}



function moreCornish(){
	clear(true)
	console.log("You eat more of the Cornish pastie.")
	console.log("It causes more visions and you realise that flesh begets flesh.")
	console.log("Unfortunately eating more of the pastie causes the toxins from the bad pastie to accumulate to a fatal level, but you die enlightened.")
	console.log("Your landlord finds your dead body and steals all your Nintendo Wii games.")
}

function TV(){
	clear(true)
	console.log("You watch more TV.")
	console.log("It rots you mind, conforming you to the current fads of your culture.")
	console.log("Life goes on...")
}


function punch(){
	clear(true)
	console.log("You punch your landlord.")
	console.log("Although righteous, the courts do not see it this way.")
	console.log("You go to jail.")
}


function nextWeek(){
	messageAndChoice(["'You had better' says the landlord and leaves.",
	"You close the front door and decide what to do next."],[
		"Eat more of the bad Cornish pastie",
		"Watch TV"
	],[moreCornish,TV])

}


function openDoor(){
	messageAndChoice(["You open the door, there is standing your landlord.",
	"'You're late with the rent' he says.",
	"'You need to pay me now'",
	"'If you can't pay then maybe we can figure something else out', looking at you voraciously."],[
	"Punch him"	,
	"Tell him next week"],[punch,nextWeek])
}

function leaveBang() {
	for(;;){
		
		if( printAndChoose(["The person keeps knocking on the door.","What do you do?"],
		["Nothing","Answer door"]) == 1)
			break
	}
	openDoor()
}



function messageAndChoice(messages:string[],choice:string[],f:any[]) {

	const r = printAndChoose(messages,choice)

	if(r == 0)  f[0]()
	if(r == 1)  f[1]()

}

*/



function drawLines(amount:number, line:string) {
	
	for(let i = 0;i < amount;i++) {
		print(line)
	}
	
}



function test<Type>(a:Type): Type {
	return a 
}


function extra3() {
	
	clear(true)
	
	print("This function only accepts a certain type")

	print( test(10).toString() )

	print( test("hello") )

	//print( test<boolean>(1234) ) // only allow boolean, causes error
	
	
	askQuestion('Press ENTER to continue! ', haveAdventures); 
	
}



function extra2() {
	
	type sandwich = "cheese" | "ham" | "pickle"
	
	
	let a:sandwich = "cheese"
	
	
	//let b:sandwich = "egg" // causes error
	
	print(`I have the munchies I will eat ${a}`)
	
	askQuestion('Press ENTER to continue! ', extra3); 
	
}




export function extra(){
	/*
	//could not get the below code playing nice with other code so did something else
	messageAndChoice(["You awake to find yourself in a squalid bedsit.",
"I know I should not have eaten that 2 days past the sell by date Cornish pastie.",
"It is causing me to have hallucinations AND it will proberley give me diarrhea as well.",
"Your stomach hurts and it grumbles as if in agrement.",
"You hear a banging on the front door."],["Answer the door","Do nothing"],[openDoor,leaveBang])
*/
	
	
	clear(true)
	print("You awake to find yourself in a squalid bedsit.")
	print("I know I should not have eaten that 2 days past the sell by date Cornish pastie.")
	print("It is causing me to have hallucinations AND it will proberley give me diarrhea as well.")
	print("Your stomach hurts and it grumbles as if in agrement.")
	print("I am seeing weird things")
	
	drawLines(10,"fdsf435359**(()*4309842")
	drawLines(3,"$()£()*390*$*)(*()*)(*)(*(")
	drawLines(7,"£$£43243242")
	
	//drawLines("£$£43243242",8)// error stopped
	
	askQuestion('Press ENTER to continue! ', extra2); 
	

}


