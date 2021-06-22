const got = require('got');
const fs= require('fs');
const  cheerio = require('cheerio');
// used to crawl the html data !!!
const crawlWebsite = async (siteLink) =>{
	const html =  await got.get(siteLink);
	console.log('hello worl',html);	
	return html.body;
};




function writeFile(data, fileName) {
	const writeStream = fs.createWriteStream(fileName);
	writeStream.write(data, "utf-8", (err,data)=>{console.log('done the process')});
	
}
const globalTable = {};
let $ = '';
(async()=> {

	try {
		const url = "https://docs.google.com/document/d/1bHs6bLc3ttDk7XVlJV-cypuHUt1f_9uqNou-MDY9pyU/edit#heading=h.o3ckrxjv9xia"	
		const data =  await crawlWebsite(url);
		console.log('error', data);
		writeFile(data, url.split("/")[url.split("/").length-1].concat(".html"));
		$ = cheerio.load(data);
		// Iterating every table which exist in the system and then retreiving their data also !!
		 //retreiveDataFromHtmlTable($);
		const news=retreiveNews($);
		console.log('data from crawl',news);
	} catch (error) {
		console.log(error);
	}
})();




function retreiveDataFromHtmlTable($) {
	let columnHeader = [];
	$('body').find('table').each(function (index, table) {
		$(table).find('tr').each((i,row)=>{
			const rowJson = {};
			if (i === 0) {
				let tmp = [];
				$(row).find('th').each((i,cell) => tmp.push($(cell).text().trim()));
				columnHeader.push(tmp);
				console.log('data of column header',columnHeader);
			} else {
				$(row).find('td').each((i,cell) => rowJson[columnHeader[index][i]] = $(cell).text().trim());
				if (globalTable[index]) globalTable[index].push(rowJson);
				else globalTable[index] = [rowJson];
			}
		});
		
	});
}

function retreiveNews($) {
	const news = [];
	let index = 0;
	$('body').find('section .mainContainer').each( (index,row) => {
	
		$(row).find('section .worldSection').each((i,detail) =>{
			if ( true || i == 0){
			$(detail).find('.cartHolder').each((articleIndex, articleData)=> {
				if (  true || articleIndex==1) {
					let imgReal = '';
					$(articleData).find('figure span').each((imgI,imgR)=> { imgReal = $(imgR).find('img').attr('src')});
				
					let object = {
						title: $(articleData).find('.hdg3').text().toString(),
						type: $(articleData).find('.catName').text(),
						link: 'https://www.hindustantimes.com/' + $(articleData).find('.hdg3 a').attr('href'),
						shortStory: $(articleData).find('.sortDec').text().toString(),
						date: $(articleData).find('.dateTime').text(),
						imageReal: imgReal,
						image: $(articleData).find('.lazy').attr('data-src'),
						dataSource: 'Hindustan Times',
						id: ++index
					
					}
					news.push(object);
			}
			})
			}
		});

	});
return news;	
}
