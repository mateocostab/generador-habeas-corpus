const { default: jsPDF } = require("jspdf")

function exportPDF() {
    //variables
    //labels

    //Ponle los nombres de los labels que tengas

    //input
    //aqui estan las dos selecciones que tienes que hacer para pasar al siguiente paso, tu decides si tomas las dos al tiempo o una y otra despues
    let tipoHabeas = document.querySelector('tipoHabus')
    let genero = document.querySelector('genero')
    var date = new Date();
    //Ponle los nombre de los input que tengas 
    var iNombre = document.getElementById('iNombre').value,
        iEmail = document.getElementById('iEmail').value,
        iNumeroCC = document.getElementById('iNumeroCC').value,
        iNumeroCelular = document.getElementById('iNumeroCelular').value,
        iDireccion = document.getElementById('iDireccion').value,
        iAgredido = document.getElementById('iAgredido').value,
        iAutoridadRealizo = document.getElementById('iAutoridadRealizo').value,
        iAutoridadOrdeno = document.getElementById('iAutoridadOrdeno').value,
        iLugar = document.getElementById('iLugar').value,
        iFecha = document.getElementById('iFecha').value,
        iDiasTrans = document.getElementById('iDiasTrans').value,
        iCiudad = document.getElementById('iCiudad').value,
        iCiudadCC=document.getElementById('iCiudadCC').value,

        //Selects
        iTipoDocumento = document.querySelector('iTipoDocumento'),
        iMayorEdad = document.querySelector('iMayorEdad'),
        iCondicionDe = document.querySelector('iCondicionDe'),
        iSituacion = document.querySelector('iSituacion'),
        iNumeroIdentificacion = document.querySelector('iNumeroIdentificacion'),
        iConocimientoAutoridad = document.querySelector('iConocimientoAutoridad'),
        iGenero = document.querySelector('iGenero'),



    //pdf
    var doc = new jsPDF()

    //Metodos
    doc.text(iCiudad)
    doc.text(date.getDate)
    if(iConocimientoAutoridad === '2'){
        iAutoridadOrdeno = 'una autoridad desconocida'
    }
    //Caso 1
    if(iGenero==='1')
    {
        doc.text("Yo,"+ iNombre + ', en mi condición de ' + iCondicionDe+', mayor y vecino de la ciudad de' + iCiudad + ', identificado con cédula de ciudadanía'+ iNumeroCC +'de'+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iAgredido + ', con fundamento en los siguientes:')

        if(iSituacion === '1'){
            doc.text('El señor' + iNombre + 'fue aprendido por' + iAutoridadRealizo + 'el pasado' + iFecha + 'en' + iCiudad + 'por orden de' + iAutoridadOrdeno +  'Desde entonces hasta la fecha han transcurrido' + iDiasTrans +', sin que el mismo haya sido indagado o resuelta su situación jurídica.')
        }
        else{
            doc.text('El señor' + iNombre + 'se encuentra recluido en' + iLugar + ', a partir del día'+ iFecha + 'y el funcionario que ordenó su aprehensión es' + iAutoridadOrdeno + 'quien se desempeña como' + iAutoridadRealizo)
        }
    }
    //Caso 2
    else if(iGenero==='2')
        {
            doc.text("Yo,"+ iNombre + ', en mi condición de ' + iCondicionDe+', mayor y vecina de la ciudad de' + iCiudad + ', identificada con cédula de ciudadanía'+ iNumeroCC +'de'+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iAgredido + ', con fundamento en los siguientes:')
    
            if(iSituacion === '1'){
                doc.text('La señora' + iNombre + 'fue aprendida por' + iAutoridadRealizo + 'el pasado' + iFecha + 'en' + iCiudad + 'por orden de' + iAutoridadOrdeno +  '. Desde entonces hasta la fecha han transcurrido' + iDiasTrans +', sin que la misma haya sido indagada o resuelta su situación jurídica.')
            }
            else{
                doc.text('La señora' + iNombre + 'se encuentra recluida en' + iLugar + ', a partir del día'+ iFecha + 'y el funcionario que ordenó su aprehensión es' + iAutoridadOrdeno + 'quien se desempeña como' + iAutoridadRealizo)
            }
        }
        //Caso 3
    else{
        doc.text("Yo,"+ iNombre + ', en mi condición de ' + iCondicionDe+', mayor y vecine de la ciudad de' + iCiudad + ', identificade con cédula de ciudadanía'+ iNumeroCC +'de'+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iAgredido + ', con fundamento en los siguientes:')
    
            if(iSituacion === '1'){
                doc.text(iNombre + 'fue aprendide por' + iAutoridadRealizo + 'el pasado' + iFecha + 'en' + iCiudad + 'por orden de' + iAutoridadOrdeno +  '. Desde entonces hasta la fecha han transcurrido' + iDiasTrans +', sin que le misme haya sido indagade o resuelta su situación jurídica.')
            }
            else{
                doc.text(iNombre + 'se encuentra recluide en' + iLugar + ', a partir del día'+ iFecha + 'y el funcionario que ordenó su aprehensión es' + iAutoridadOrdeno + 'quien se desempeña como' + iAutoridadRealizo)
            }
    }

    doc.setFontType('italics')
    doc.text('Sumado a ello, se deberán relatar de forma concreta y clara cada uno de los hechos relevantes respecto de la detención arbitraria.')


    doc.text('JURAMENTO',20,50)

    doc.text('Bajo la gravedad del juramento, que se considera prestado con la presentación de esta petición, manifiesto que ningún juez ha asumido el conocimiento de otra petición de habeas corpus ni decidido sobre la misma.')

    doc.text('FUNDAMENTOS DE DERECHO')

    doc.text('Esta petición está fundamentada, señor juez, en los artículos 30 y 85 de la Constitución Nacional referidos a la privación ilegal de la libertad y a la aplicación inmediata de los derechos consagrados en la Constitución Política. Sumado a ello, la Convención Americana de Derechos Humanos establece en su artículo 7 el derecho a la libertad personal, ante lo cual, nadie puede ser sometido a detención arbitraria ni mucho menos puede ser privado de la libertad, salvo por causas y condiciones fijadas por la Constitución y la Ley. En el artículo 8 de este instrumento también se plasma como garantía judicial el derecho que tiene toda persona a ser oída en un plazo razonable y por la autoridad competente para la determinación de sus derechos.')

    doc.text('Bien se dispuso por parte de la Corte Constitucional en Sentencia C 187 de 2006 que:')

    doc.text('“Una interpretación acorde con la Constitución Política supone que, después de invocado el hábeas corpus, la autoridad judicial encargada de conocer, deberá verificar la existencia de las condiciones que conducen a ordenar que el peticionario sea puesto en libertad. Tales condiciones son: i) que la persona esté privada de la libertad, y ii) que la privación de la libertad o la prolongación de la misma se haya dado con violación o quebrantamiento del orden constitucional y legal. Una vez demostrado que la privación de la libertad personal o la prolongación de la privación de la libertad son el resultado de actos contrarios a lo dispuesto por el ordenamiento constitucional o legal, la autoridad judicial competente deberá ordenar que la persona sea puesta inmediatamente en libertad”')

    doc.text('SOLICITUD')

}