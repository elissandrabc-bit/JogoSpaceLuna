

const scriptsInEvents = {

	async Folhajogo_Event7_Act3(runtime, localVars)
	{
		// só perde vida se não estiver em game over
		if (runtime.globalVars.GameOver === 0) {
		    runtime.globalVars.Vidas -= 1;
		
		    // impede ficar negativa
		    if (runtime.globalVars.Vidas < 0) {
		        runtime.globalVars.Vidas = 0;
		    }
		
		    // atualiza o texto de vidas
		    const txt = runtime.objects.TxtVidas.getFirstInstance();
		    if (txt) {
		        txt.text = "Vidas: " + runtime.globalVars.Vidas;
		    }
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
