
app.post("/envJsonFileName/get", function(req, res) {
// res.json(req.body);
let files = fs.readdirSync(__dirname);
let envfiles = _.filter(files, f => {
	return f.indexOf("env.json") != -1;
});
	res.json({ data: envfiles });
});


app.post("/oneEnvJsonSchema/get", async function(req, res) {
	let { name } = req.body;
	try {
		let aSchema = await loadJsonFile(`./${name}.schema.json`);
			return res.json(aSchema);
		} catch (error) {
			return res.status(500).send({ error: error });
	}
});

// app.post("/oneEnvJsonSchema/write", async function(req, res) {
// 	let { name, data } = req.body;
// 	try {
// 		await writeJsonFile(`./${name}.schema.json`, data);
// 		return res.status(200).send("done");
// 	} catch (error) {
// 		return res.status(500).send({ error: error });
// 	}
// });

app.post("/envJson/get", async function(req, res) {
	// res.json(req.body);
	let { name } = req.body;
	try {
		let envJson = await loadJsonFile(`./${name}`, data);
		return res.json(envJson);
	} catch (error) {                                                                                          
		return res.status(500).send({ error: error });
	}
});


// app.post("/envJson/write", async function(req, res) {
// 	// res.json(req.body);
// 	let { name, data } = req.body;
// 	try {
// 		await writeJsonFile(`./${name}`, data);
// 		return res.status(200).send("done");
// 	} catch (error) {
// 		return res.status(500).send({ error: error });
// 	}
// });



app.post("/envJsonFileName/get", function(req, res) {
// res.json(req.body);
let files = fs.readdirSync(__dirname);
let envfiles = _.filter(files, f => {
return f.indexOf("env.json") != -1;
});
res.json({ data: envfiles });
});
app.post("/oneEnvJsonSchema/get", async function(req, res) {
let { name } = req.body;
try {
let aSchema = await loadJsonFile(`./${name}.schema.json`);
return res.json(aSchema);
} catch (error) {
return res.status(500).send({ error: error });
}
});
app.post("/oneEnvJsonSchema/write", async function(req, res) {
let { name, data } = req.body;
try {
await writeJsonFile(`./${name}.schema.json`, data);
return res.status(200).send("done");
} catch (error) {
return res.status(500).send({ error: error });
}
});
app.post("/envJson/get", async function(req, res) {
// res.json(req.body);
let { name } = req.body;
try {
let envJson = await loadJsonFile(`./${name}`, data);
return res.json(envJson);
} catch (error) {
return res.status(500).send({ error: error });
}
});
app.post("/envJson/write", async function(req, res) {
// res.json(req.body);
let { name, data } = req.body;
try {
await writeJsonFile(`./${name}`, data);
return res.status(200).send("done");
} catch (error) {
return res.status(500).send({ error: error });
}
});