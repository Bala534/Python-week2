messages = document.getElementById('messages');
input = document.getElementById('input');
botblock = document.getElementById('botblock');
userblock = document.getElementById('userblock');

msgno = 0; //ID

var flag=false;
var loadFile = function(event) {
	var image = document.getElementById('myphoto');
	image.src = URL.createObjectURL(event.target.files[0]);
};


plants = {

//mango
"mango":{soil:"Black soil.",soilimg:"https://images-na.ssl-images-amazon.com/images/I/51ztIGI%2B9CL.jpg",water:"9-12 litre/day/plant water is required.",waterimg:"https://img.favpng.com/14/1/19/drinking-water-glass-cup-png-favpng-PcXDy7v6AAFKuRKdzjaYeQ1cj.jpg",vid:"https://www.youtube.com/embed/wZcYn12Nds0",
days:"Mango Tree will take at least 5 years for the seeds to grow into a mature tree that produces fruit.",daysimg:"https://qph.fs.quoracdn.net/main-qimg-aecc08e0030fd5dc4e0ce34c5cfce829.webp"},
//greengram
"greengram":{soil:"Sandy loam to black cotton soils.",soilimg:"https://agriculturegoods.com/wp-content/uploads/2020/02/Black-Soil1.png",
vid:"https://www.youtube.com/embed/aC2Nmq7W800",days:"Green grams plants mature within 60-90 days after sowing.",daysimg:"https://3.bp.blogspot.com/-tMfLAXR2cc4/W9Hp5YwjAvI/AAAAAAAAFW8/C7Vnky5v1WMEzLCtXFKxkopdb6K6s0-5gCLcBGAs/s600/Green%2BGram%2BPlant.jpg",water:"Small plant uses 1 tablespoon per day, while large plant uses slightly less than 2 tablespoons per day.",waterimg:"https://upload.wikimedia.org/wikipedia/commons/1/17/Spoon_water.jpg"},
//hibiscus
"hibiscus":{soil:"Hibiscus does not grow well in wet. Loam and sandy loam soils tend to be the best.",soilimg:"https://pixfeeds.com/images/32/608182/1200-608182-10923172-65499477-72160391.jpg",days:"Reaching 7 to 12 feet tall in just two or three years and blooming throughout the year.",daysimg:"https://5.imimg.com/data5/OZ/BL/FW/SELLER-3629151/hibiscus-flower-plant-500x500.jpg",vid:"https://www.youtube.com/embed/Uh4jmHtgGY8",water:"Tropical hibiscus plants should be kept consistently moist, so water whenever the top inch of soil is dry.",waterimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyLgmOCKoF0MbOg97OEirF73UG2htosfXp8A&usqp=CAU"},
//tomato
"tomato":{vid:"https://www.youtube.com/embed/23gT5g4k400",soil:"Fertile loam with a pH of 5.8 to 7.0. Mix several inches of organic compost or aged animal manure into the upper 4-8 inches of soil before planting.",soilimg:"https://pulptastic.com/wp-content/uploads/2017/12/composting.jpg",days:"Early-season tomatoes require 50 to 60 days to reach harvest from transplanting; mid-season tomatoes require 60 to 80 days; late-season tomatoes require 80 or more days.",daysimg:"https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",water:"Garden tomatoes typically require 1-2 inches of water a week.",waterimg:"https://www.allotment-garden.org/wp-content/uploads/2016/04/Watering-Tomatoes.jpg"},
//cotton
"cotton":{vid:"https://www.youtube.com/embed/PQgh1H-DVUQ",days:"First bolls generally begin to open 105 to 130 days after cotton planting. Bolls set later in the season often take 12 to 25 days longer to mature",daysimg:"https://cdn.britannica.com/18/156618-050-39339EA2/cotton-harvesting.jpg",soil:"Sandy loam soils.",soilimg:"https://pixfeeds.com/images/32/608182/1200-608182-10923172-65499477-72160391.jpg",water:"Cotton plant needs a minimum of 500 mm of water between germination and boll formation.",waterimg:"https://pixfeeds.com/images/gardening/organic-farming/640-186946764-watering-in-cotton-farm.jpg"}

}



function taketheinput(event) {
	// here is the js code for input processing
	//if they hit the enter key 
	if(event.key === "Enter"){
    // create a USER message block
		messages.innerHTML += userblock.outerHTML;
		// and change its ID
		msgno += 1;
		messages.lastChild.id = msgno;
		//now changing its TEXT
		messages.lastChild.childNodes[3].textContent = input.value;
		// finally process the input 
		processinput(input.value.toLowerCase());
		input.value = "";

	}
}

function processinput(inputval){

	if(inputval!=""){
    // create a BOT message block
		messages.innerHTML += botblock.outerHTML
		// and change its ID
		msgno += 1
		messages.lastChild.id = msgno
		//now changing its text
		messages.lastChild.childNodes[3].textContent = reply(inputval)
	}

}

// reply by the bot according user input
function reply(inputval) {

	result = inputval.match(/(how)|(\w+)/g)
	var poss = "how water days to grow soil mango greengram hibiscus tomato cotton  thank you thanks";
	if(poss.includes(inputval)==false && flag==false){
		flag=true;
		return "Hi "+inputval.toUpperCase()+"! Enter the plant name you want to grow"
	}
	
	if(result.includes("soil")){
		var img = document.createElement('img');
		img.src=recentproduct.soilimg; 
		document.getElementById(msgno).appendChild(img);
		return recentproduct.soil
	}

	if(result.includes("water")){
		var img = document.createElement('img'); 
		img.src=recentproduct.waterimg; 
		document.getElementById(msgno).appendChild(img);
		return recentproduct.water
	}

	if(result.includes("days")){
		var img = document.createElement('img'); 
		img.src=recentproduct.daysimg; 
		document.getElementById(msgno).appendChild(img);
		return recentproduct.days
	}

	if(result.includes("how")){
		var iframe = document.createElement('iframe'); 
		iframe.src=recentproduct.vid
		document.getElementById(msgno).appendChild(iframe);
		return "Watch this video for more info!!!!";
	}

	if(result.includes("thank")){
			return "Happy Gardening :-)"
	}

	a="";
	result.forEach(function(product){
		if(plants.hasOwnProperty(product)){
		a = "Please Enter the details you want to know. For Ex: 1) soil, 2) water, 3) how, 4) days to growetc.,"
		recentproduct = plants[product];
		}
	})

	if(a){
		return a;
	}

	return "Sorry " + inputval + " is not available!";

}