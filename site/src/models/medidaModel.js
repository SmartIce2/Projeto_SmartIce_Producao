var database = require("../database/config");

function buscarUltimasMedidas(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        temperatura, 
        dataHora as momento,  
                        FORMAT(DataHora, 'HH:mm:ss') as momento_grafico
                    from hist_medida
                    where fkSensor = ${idSensor}
                    order by idRegistro desc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura,
        dataHora as momento,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
                    from hist_medida
                    where fkSensor = ${idSensor}
                    order by idRegistro desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasveiculo(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        temperatura, 
        dataHora as momento,  
                        FORMAT(DataHora, 'HH:mm:ss') as momento_grafico
                    from hist_medida
                    where fkSensor = ${idSensor}
                    order by idRegistro desc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura,
        dataHora as momento,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
                    from hist_medida
                    where fkSensor = ${idSensor}
                    order by idRegistro desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        temperatura,
        dataHora as momento,  
                        CONVERT(varchar, dataHora, 108) as momento_grafico 
                        from hist_medida where fkSensor = ${idSensor} 
                    order by idRegistro desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura,
        dataHora as momento,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
                    from hist_medida
                    where fkSensor = ${idSensor}
                    order by idRegistro desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealveiculos(idSensorveiculo) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        temperatura,
        dataHora as momento,  
                        CONVERT(varchar, dataHora, 108) as momento_grafico 
                        from hist_medida where fkSensor = ${idSensorveiculo} 
                    order by idRegistro desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        temperatura as temperatura,
        dataHora as momento,
                        DATE_FORMAT(dataHora,'%H:%i:%s') as momento_grafico
                    from hist_medida
                    where fkSensor = ${idSensorveiculo}
                    order by idRegistro desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasEmTempoRealveiculos,
    buscarUltimasMedidasveiculo,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
