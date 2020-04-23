var size,len;
var mat=new Array();
var pI
var pJ
var p1I,p1J,p2I,p2J,p3I,p3J,p4I,p4J;
var tab=document.getElementById("tab")
var x=2
var quadrant;
var cnt=0
function init()
{
	size=parseInt(document.getElementById("taille").value);
	pI=parseInt(document.getElementById("pI").value);
	pJ=parseInt(document.getElementById("pJ").value);

	for(var i=0;i<size;i++)
		mat[i]=new Array();
	for(var i=0;i<size;i++)
	for(var j=0;j<size;j++)
	{
	
		mat[i][j]=0
	}
	mat[pI][pJ]=-1

	trominoTile(size)
for(var i=0;i<size;i++)
for(var j=0;j<size;j++)
	

	var tr='<tbody><tr>';
	var td=''
	for(var i=0;i<size;i++)
	{
		for(var j=0;j<size;j++)
		{ 
			if(mat[i][j]==-1)
				td=td+'<td style="border-radius:6px; border-collapse: separate;" id=t>'+-1+'</td>'
			else
				td=td+'<td style="border-radius:6px; border-collapse: separate; backgroundColor:#5b8c5a";>'+mat[i][j]+'</td>'
		}
		tr=tr+td+'</tr>'
		td='';
	}
tr=tr+'</tbody>'
tab.innerHTML=tr;
}
function trominoTile(size) {
  	trominoTileRec(size,0,0);
}

function trominoTileRec(n,x,y) {
	var halfSize=Math.trunc( n/2);
	var xCenter=0
	var yCenter=0
	xCenter=x+halfSize-1
	yCenter=y+halfSize-1

	var hr,hc;	
	if(n == 2){
		cnt++;
		for(var i=0;i<(n);i++) {
			for(var j=0;j<(n);j++){
	
				if(mat[(x+i)][(y+j)]==0)
					mat[(x+i)][(y+j)]=cnt;
			}
		}
		return 0;
	}
	//Search the hole's location
	for(var i=x;i<(n+x);i++) {

		for(var j=y;j<(n+y);j++){
			
			if(mat[i][j] !=0) {
				
				hr=i; hc=j;
				break;
			}
		}
	}

	
	//If missing Tile is in 1st quadrant
	if((hr<=xCenter) && (hc <=yCenter)){
		putTromino((xCenter),(yCenter + 1),(xCenter+1),(yCenter),(xCenter+1),(yCenter+1));		
		quadrant=1
	}
	//If missing Tile is in 2st quadrant
	else if((hr <=xCenter )&&( hc >=yCenter )){ 
		putTromino((xCenter),(yCenter),(xCenter+1),(yCenter+1),(xCenter+1),(yCenter));		
		quadrant=2
	}
	//If missing Tile is in 3st quadrant
	else if((hr >xCenter) && (hc <= yCenter)) { 
		putTromino((xCenter),(yCenter),(xCenter),(yCenter+1),(xCenter+1),(yCenter+1));		
		quadrant=3
	}
	//If missing Tile is in 4st quadrant
	else if(hr >xCenter && (hc >= yCenter)) { 
		putTromino((xCenter ), (yCenter),(xCenter),yCenter+1,(xCenter+1),(yCenter));		
		quadrant=4
	}
	if(quadrant==1){
		trominoTileRec(halfSize,x, y);
		trominoTileRec(halfSize,x, yCenter);
		trominoTileRec(halfSize,xCenter+1,y);
		trominoTileRec(halfSize,xCenter+1, yCenter+1 );
	}
		if(quadrant==2){
		trominoTileRec(halfSize,x, y);
		trominoTileRec(halfSize,x, yCenter+1);
		trominoTileRec(halfSize,xCenter+1, y);
		trominoTileRec(halfSize,xCenter+1, yCenter+1);
	}
		if(quadrant==3){
		trominoTileRec(halfSize,x, y);
		trominoTileRec(halfSize,x, yCenter+1);
		trominoTileRec(halfSize,xCenter+1, y);
		trominoTileRec(halfSize,xCenter+1, yCenter+1);
	}
		if(quadrant==4){
		trominoTileRec(halfSize,x, y);
		trominoTileRec(halfSize,x, yCenter+1);
		trominoTileRec(halfSize,xCenter+1, y);
		trominoTileRec(halfSize,xCenter+1, y);
	}
	return 0;


}
function putTromino(x1,y1,x2,y2, x3,y3) {

	cnt++;	
	mat[x1][y1] = cnt;
	mat[x2][y2] = cnt;
    mat[x3][y3] = cnt;
}




