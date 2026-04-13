

const scriptsInEvents = {

	async FolhaDeEventos1_Event1_Act3(runtime, localVars)
	{
		const txtVidas = runtime.objects.TxtVidas.getFirstInstance();
		const txtPlanetas = runtime.objects.TxtPlanetas.getFirstInstance();
		
		if (txtVidas) {
		    txtVidas.text = "Vidas: " + runtime.globalVars.Vidas;
		}
		
		if (txtPlanetas) {
		    txtPlanetas.text = "Pontuação: " + runtime.globalVars.PlanetaColetados;
		}
	},

	async FolhaDeEventos1_Event7_Act1(runtime, localVars)
	{
		let vida = runtime.globalVars.Vidas;
		
		vida--;
		
		if (vida < 0) {
		    vida = 0;
		}
		
		runtime.globalVars.Vidas = vida;
		
		const txtVidas = runtime.objects.TxtVidas.getFirstInstance();
		
		if (txtVidas) {
		    txtVidas.text = "Vidas: " + vida;
		}
		
		if (vida <= 0) {
		    runtime.goToLayout("Game over");
		}
	},

	async FolhaDeEventos1_Event6_Act4(runtime, localVars)
	{
		let vida = runtime.globalVars.Vidas;
		
		vida--;
		
		if (vida < 0) {
		    vida = 0;
		}
		
		runtime.globalVars.Vidas = vida;
		
		const txtVidas = runtime.objects.TxtVidas.getFirstInstance();
		
		if (txtVidas) {
		    txtVidas.text = "Vidas: " + vida;
		}
		
		if (vida <= 0) {
		    runtime.goToLayout("Game over");
		}
	},

	async FolhaDeEventos1_Event5_Act1(runtime, localVars)
	{
		let planetas = runtime.globalVars.PlanetaColetados;
		
		planetas++;
		
		runtime.globalVars.PlanetaColetados = planetas;
		
		const txtPlanetas = runtime.objects.TxtPlanetas.getFirstInstance();
		
		if (txtPlanetas) {
		    txtPlanetas.text = "Pontuação: " + planetas;
		}
		
		if (planetas >= 8) {
		    runtime.goToLayout("Parabens");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
