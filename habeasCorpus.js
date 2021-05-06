var botonprueba =document.getElementById("botonprueba");
function demo(){
    var pdf = new jsPDF()
    pdf.text('Hola',10,10)
    pdf.save('hola.pdf')
}
botonprueba.addEventListener('click',demo,true);
    //variables
    //labels

    //input
    var date = new Date();
    //Ponle los nombre de los input que tengas 
    var iNombreS = document.getElementById('iNombreS').value,
        iNombreA = document.getElementById('iNombreA').value,
        iEmail = document.getElementById('iEmail').value,
        iNumeroCCS = document.getElementById('iNumeroCCS').value,
        iNumeroCelular = document.getElementById('iNumeroCelular').value,
        iDireccionS = document.getElementById('iDireccionS').value,
        iAutoridadRealizo = document.getElementById('iAutoridadRealizo').value,
        iOrdenDetencion = document.getElementById('iOrdenDetencion').value,
        iLugarD = document.getElementById('iLugarD').value,
        iFecha = document.getElementById('iFecha').value,
        iDiasTrans = document.getElementById('iDiasTrans').value,
        iCiudadS = document.getElementById('iCiudadS').value,
        iCiudadCC = document.getElementById('iCiudadCC').value,
        idAutoridad = document.getElementById('idAutoridad').value,
        iHechos = document.getElementById('textoHechos').value

        //Selects
        iTipoDocumento = document.querySelector('iTipoDocumento'),
        iMayorEdad = document.querySelector('iMayorEdad'),
        iCondicionDe = document.querySelector('iCondicionDe'),
        iSituacion = document.querySelector('iSituacion'),
        iNumeroIdentificacion = document.querySelector('iNumeroIdentificacion'),
        iConocimientoAutoridad = document.getElementById('iConocimientoAutoridad'),
        iConocimientoIdAutoridad = document.getElementById('iConocimientoIdAutoridad'),
        iGeneroS = document.querySelector('iGeneroS'),
        iGeneroA = document.querySelector('iGeneroA')

        var conocimientoAutoridad = iConocimientoAutoridad.value
        var conocimientoIdAutoridad = iConocimientoIdAutoridad.value

        //Strings 
        var p1 = 'Sumado a ello, se deberán relatar de forma concreta y clara cada uno de los hechos relevantes respecto de la detención arbitraria.',
            p2 = 'Bajo la gravedad del juramento, que se considera prestado con la presentación de esta petición, manifiesto que ningún juez ha asumido el conocimiento de otra petición de habeas corpus ni decidido sobre la misma.',
            p3 = 'Esta petición está fundamentada, señor juez, en los artículos 30 y 85 de la Constitución Nacional referidos a la privación ilegal de la libertad y a la aplicación inmediata de los derechos consagrados en la Constitución Política. Sumado a ello, la Convención Americana de Derechos Humanos establece en su artículo 7 el derecho a la libertad personal, ante lo cual, nadie puede ser sometido a detención arbitraria ni mucho menos puede ser privado de la libertad, salvo por causas y condiciones fijadas por la Constitución y la Ley. En el artículo 8 de este instrumento también se plasma como garantía judicial el derecho que tiene toda persona a ser oída en un plazo razonable y por la autoridad competente para la determinación de sus derechos.',
            p4 = 'Bien se dispuso por parte de la Corte Constitucional en Sentencia C 187 de 2006 que:',
            p5 = '“Una interpretación acorde con la Constitución Política supone que, después de invocado el hábeas corpus, la autoridad judicial encargada de conocer, deberá verificar la existencia de las condiciones que conducen a ordenar que el peticionario sea puesto en libertad. Tales condiciones son: i) que la persona esté privada de la libertad, y ii) que la privación de la libertad o la prolongación de la misma se haya dado con violación o quebrantamiento del orden constitucional y legal. Una vez demostrado que la privación de la libertad personal o la prolongación de la privación de la libertad son el resultado de actos contrarios a lo dispuesto por el ordenamiento constitucional o legal, la autoridad judicial competente deberá ordenar que la persona sea puesta inmediatamente en libertad”'
            //pdf
    
    function exportPDF() {
        var doc = new jsPDF()
    //Metodos

    if(conocimientoAutoridad === '2'){
        iOrdenDetencion = 'una autoridad desconocida'
    }
    if(conocimientoIdAutoridad ==='2'){
        iConocimientoIdAutoridad = 'desconocido'
    }
    doc.setFontSize(12);
    doc.setFont('Times')
    doc.text(iCiudad,10,10)
    doc.text(date.getDate,10,20)

    doc.text('Señor,',10,35)
    doc.text('Juez de'+ iCiudadS, 10,45)
    doc.text('E.S.D.', 10, 55)
    //Caso 1.
    if(iGenero==='1')
    {
        doc.text("Yo,"+ iNombreS + ', en mi condición de ' + iCondicionDe+', mayor y vecino de la ciudad de' + iCiudad + ', identificado con cédula de ciudadanía'+ iNumeroCCS +'de'+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iNombreA + ', con fundamento en los siguientes:', 20,65)
        
        doc.setFont('Times','bold')
        doc.text("HECHOS",10,95, 'center') 
        if(iSituacion.value === '1'){
            doc.text('El señor' + iNombre + 'fue aprendido por' + iAutoridadRealizo + 'el pasado' + iFecha + 'en' + iCiudad + 'por orden de' + iOrdenDetencion +  'Desde entonces hasta la fecha han transcurrido' + iDiasTrans +', sin que el mismo haya sido indagado o resuelta su situación jurídica.',10,105)
        }
        else{
            doc.text('El señor' + iNombre + 'se encuentra recluido en' + iLugarD + ', a partir del día'+ iFecha + 'y el funcionario que ordenó su aprehensión es' + iOrdenDetencion + 'quien se desempeña como' + iAutoridadRealizo,10,105)
        }
        doc.addPage()
        doc.setFont('Times', 'italics')
        doc.text(p1,10,10)
    
        doc.setFont('Times','normal')
        doc.text(iHechos, 10,20)
        
        doc.setFont('Times','bold')
        doc.text('JURAMENTO', 10, 40 ,'center')
    
        doc.setFont('Times','normal')
        doc.text(p2,10,50)
    
        doc.text('FUNDAMENTOS DE DERECHO',10,75,'center')
    
        doc.text(p3,10,85)
    
        doc.text(p4,10,95)
    
        doc.setFont('Times', 'italics')
        doc.text(p5,10,115)
    
        doc.addPage()
        doc.setFont('Times','bold')
        doc.text('SOLICITUD',10,20,'center')
        doc.text('Efectuada la verificación de la violación de las garantías constitucionales y legales, solicito a usted ordenar la libertad inmediata del señor' + iNombreA + 'y compulsar copias para que se inicien las investigaciones a que hubiere lugar', 10,30)
    }
    //Caso 2
    else if(iGenero.value ==='2')
        {
            doc.text("Yo,"+ iNombre + ', en mi condición de ' + iCondicionDe+', mayor y vecina de la ciudad de' + iCiudad + ', identificada con cédula de ciudadanía'+ iNumeroCC +'de'+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iNombreA + ', con fundamento en los siguientes:',20,65)
            
            doc.setFont('Times','bold')
            doc.text("HECHOS",10,95, 'center') 
            if(iSituacion.value === '1'){
                doc.text('La señora' + iNombre + 'fue aprendida por' + iAutoridadRealizo + 'el pasado' + iFecha + 'en' + iCiudad + 'por orden de' + iOrdenDetencion +  '. Desde entonces hasta la fecha han transcurrido' + iDiasTrans +', sin que la misma haya sido indagada o resuelta su situación jurídica.',10,105)
            }
            else{
                doc.text('La señora' + iNombre + 'se encuentra recluida en' + iLugarD + ', a partir del día'+ iFecha + 'y el funcionario que ordenó su aprehensión es' + iOrdenDetencion + 'quien se desempeña como' + iAutoridadRealizo,10,105)
            }
            doc.addPage()
            doc.setFont('Times', 'italics')
            doc.text(p1,10,10)
        
            doc.setFont('Times','normal')
            doc.text(iHechos, 10,20)
            
            doc.setFont('Times','bold')
            doc.text('JURAMENTO', 10, 40 ,'center')
        
            doc.setFont('Times','normal')
            doc.text(p2,10,50)
        
            doc.text('FUNDAMENTOS DE DERECHO',10,75,'center')
        
            doc.text(p3,10,85)
        
            doc.text(p4,10,95)
        
            doc.setFont('', 'italics')
            doc.text(p5,10,115)
        
            doc.addPage()
            doc.setFont('','bold')
            doc.text('SOLICITUD',10,20,'center')

            doc.text('Efectuada la verificación de la violación de las garantías constitucionales y legales, solicito a usted ordenar la libertad inmediata de la señora' + iNombreA + 'y compulsar copias para que se inicien las investigaciones a que hubiere lugar', 10,30)
            
        }
        //Caso 3
    else{
        doc.text("Yo,"+ iNombre + ', en mi condición de ' + iCondicionDe+', mayor y vecine de la ciudad de' + iCiudad + ', identificade con cédula de ciudadanía'+ iNumeroCC +'de'+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iNombreA + ', con fundamento en los siguientes:',20,65)
    
            if(iSituacion.value === '1'){
                doc.text(iNombre + 'fue aprendide por' + iAutoridadRealizo + 'el pasado' + iFecha + 'en' + iCiudad + 'por orden de' + iOrdenDetencion +  '. Desde entonces hasta la fecha han transcurrido' + iDiasTrans +', sin que le misme haya sido indagade o resuelta su situación jurídica.',10,105)
            }
            else{
                doc.text(iNombre + 'se encuentra recluide en' + iLugarD + ', a partir del día'+ iFecha + 'y el funcionario que ordenó su aprehensión es' + iOrdenDetencion + 'quien se desempeña como' + iAutoridadRealizo,10,105)
            }
            doc.addPage()
            doc.setFont('Times', 'italics')
            doc.text(p1,10,10)
        
            doc.setFont('Times','normal')
            doc.text(iHechos, 10,20)
            
            doc.setFont('Times','bold')
            doc.text('JURAMENTO', 10, 40 ,'center')
        
            doc.setFont('Time New Roman','normal')
            doc.text(p2,10,50)
        
            doc.text('FUNDAMENTOS DE DERECHO',10,75,'center')
        
            doc.text(p3,10,85)
        
            doc.text(p4,10,95)
        
            doc.setFont('Times', 'italics')
            doc.text(p5,10,115)
        
           doc.addPage()
           doc.setFont('Times','bold')
            doc.text('SOLICITUD',10,20,'center')

            doc.text('Efectuada la verificación de la violación de las garantías constitucionales y legales, solicito a usted ordenar la libertad inmediata de' + iNombreA + 'y compulsar copias para que se inicien las investigaciones a que hubiere lugar', 10,30)
    }

    doc.setFont("",'bold')
    doc.text('Del señor juez, atentamente', 10,60)

    doc.setFont('','normal')

    doc.text(iNombreS)

    doc.setFont("",'bold')
    doc.text('Nombres y apellidos del solicitante:',10,70)

    doc.setFont('','normal')
    doc.text(iNombreS,30,70)

    doc.setFont('','bold')
    doc.text('Cedula de Ciudadania:',10,80)

    doc.setFont('','normal')
    doc.text(iNumeroCCS,30,80)

    doc.setFont('','bold')
    doc.text('Direccion:',10,90)

    doc.setFont('','normal')
    doc.text(iDireccionS,30,90)

    doc.setFont('','bold')
    doc.text('Telefono:',10,100)

    doc.setFont('','normal')
    doc.text(iNumeroCelular, 30,100)

    doc.output('HabeasCorpus.pdf')
}
