var mem = new Array();
var fso = new ActiveXObject('Scripting.FileSystemObject');
var text_prog= fso.OpenTextFile("pr.jss");
var s="";
while(!text_prog.AtEndOfStream)
	s+=text_prog.ReadLine()+" ";
mem=s.split(" ");
var ip=0;
while(true){
	switch(mem[ip]){
		case "take":
			WScript.Echo("input:");
			mem[mem[ip+1]]=Number(WScript.StdIn.ReadLine());
			ip+=2;
		break;
		case "give":
			WScript.Echo(mem[mem[ip+1]]);
			ip+=2;
		break;
		case "sum":
			mem[mem[ip+3]]=Number(mem[mem[ip+1]])+Number(mem[mem[ip+2]]);
			ip+=4;
		break;
		case "mult":
			mem[mem[ip+3]]=Number(mem[mem[ip+1]])*Number(mem[mem[ip+2]]);
			ip+=4;
		break;
		case "ifjump":
			if (Number(mem[mem[ip+1]]) < Number(mem[mem[ip+2]]))
			{
				ip=Number(mem[ip+3]);	
			}
			else 
				ip+=4;
		break;
		case "inc":
			mem[mem[ip+1]]=Number(mem[mem[ip+1]]) + 1;
			ip+=2;
		break;
		case "assign":
			mem[mem[ip+1]]=Number(mem[mem[ip+2]]);
			ip+=3;
		break;
		case "exit":
			WScript.Quit();
		break;
	}
}