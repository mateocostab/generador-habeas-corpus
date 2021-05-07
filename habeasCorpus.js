var botonGenerar =document.getElementById('botonGenerar');
function exportPDF() {
    //input
    var date = new Date();
    var month = date.getUTCMonth() +1;
    var day = date.getUTCDate();
    var year =date.getUTCFullYear();
    var fecha = day+'/' +month +'/' +year; 
    var mayoriaEdad ='mayor'
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
        iMayorEdad = document.getElementById('iMayorEdad'),
        iCondicionDe = document.getElementById('iCondicionDe'),
        iSituacion = document.getElementById('iSituacion'),
        iNumeroIdentificacion = document.querySelector('iNumeroIdentificacion'),
        iConocimientoAutoridad = document.getElementById('iConocimientoAutoridad'),
        iConocimientoIdAutoridad = document.getElementById('iConocimientoIdAutoridad'),
        iGeneroS = document.getElementById('iGeneroS'),
        iGeneroA = document.getElementById('iGeneroA')

        var condicion = iCondicionDe.options[iCondicionDe.selectedIndex].text
        var conocimientoAutoridad = iConocimientoAutoridad.value
        var conocimientoIdAutoridad = iConocimientoIdAutoridad.value
        var generoS = iGeneroS.value
        var generoA = iGeneroA.value
        var situacion = iSituacion.value
        var mayor = iMayorEdad.value

    if(mayor === '2'){
        mayoriaEdad='menor'
    }
        
    if(conocimientoAutoridad === '2'){
        iOrdenDetencion = 'una autoridad desconocida'
    }
    if(conocimientoIdAutoridad ==='2'){
        iConocimientoIdAutoridad = 'con numero de identificacion desconocido'
    }
    
        //pdf
        var doc = new jsPDF(
            {lineHeight:1.5
            }
        );
        doc.setFontSize(12);
        doc.setFont('Times')
        //Strings 
        var p1 = 'Bajo la gravedad del juramento, que se considera prestado con la presentación de esta petición, manifiesto que ningún juez ha asumido el conocimiento de otra petición de Hábeas Corpus ni decidido sobre la misma.',
        p2 = 'Esta petición está fundamentada, señor juez, en los artículos 30 y 85 de la Constitución Nacional referidos a la privación ilegal de la libertad y a la aplicación inmediata de los derechos consagrados en la Constitución Política. Sumado a ello, la Convención Americana de Derechos Humanos establece en su artículo 7 el derecho a la libertad personal, ante lo cual, nadie puede ser sometido a detención arbitraria ni mucho menos puede ser privado de la libertad, salvo por causas y condiciones fijadas por la Constitución y la Ley. En el artículo 8 de este instrumento también se plasma como garantía judicial el derecho que tiene toda persona a ser oída en un plazo razonable y por la autoridad competente para la determinación de sus derechos.',
        p3 = 'Bien se dispuso por parte de la Corte Constitucional en Sentencia C 187 de 2006 que:',
        p4 = '“Una interpretación acorde con la Constitución Política supone que, después de invocado el hábeas corpus, la autoridad judicial encargada de conocer, deberá verificar la existencia de las condiciones que conducen a ordenar que el peticionario sea puesto en libertad. Tales condiciones son: i) que la persona esté privada de la libertad, y ii) que la privación de la libertad o la prolongación de la misma se haya dado con violación o quebrantamiento del orden constitucional y legal. Una vez demostrado que la privación de la libertad personal o la prolongación de la privación de la libertad son el resultado de actos contrarios a lo dispuesto por el ordenamiento constitucional o legal, la autoridad judicial competente deberá ordenar que la persona sea puesta inmediatamente en libertad”'

        //Strings de Caso 1
        var c1p1="Yo, "+ iNombreS + ', en mi condición de ' + condicion + ', '+ mayoriaEdad + ' y vecino de la ciudad de ' + iCiudadS + ', identificado con cédula de ciudadanía'+ iNumeroCCS +' de '+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iNombreA + ', con fundamento en los siguientes:',
            c1p2='El señor ' + iNombreA + ' fue aprendido por ' + iAutoridadRealizo + ' el pasado ' + iFecha + 'en' + iCiudadS + 'por orden de' + iOrdenDetencion +  'Desde entonces hasta la fecha han transcurrido ' + iDiasTrans +', sin que el mismo haya sido indagado o resuelta su situación jurídica.',
            c1p3='El señor ' + iNombreA + ' se encuentra recluido en ' + iLugarD + ', a partir del día ' + iFecha + ' y el funcionario que ordenó su aprehensión es ' + iOrdenDetencion + ' quien se desempeña como ' + iAutoridadRealizo,
            c1p4= 'Efectuada la verificación de la violación de las garantías constitucionales y legales, solicito a usted ordenar la libertad inmediata del señor ' + iNombreA + ' y compulsar copias para que se inicien las investigaciones a que hubiere lugar'
        //Strings de Caso 2
        var c2p1="Yo,"+ iNombreS + ', en mi condición de ' + condicion + ', ' + mayoriaEdad + ' y vecina de la ciudad de ' + iCiudadS + ', identificada con cédula de ciudadanía '+ iNumeroCCS +' de '+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iNombreA + ', con fundamento en los siguientes:',
            c2p2='La señora ' + iNombreA + ' fue aprendida por ' + iAutoridadRealizo + ' el pasado ' + iFecha + 'en' + iCiudadS + 'por orden de' + iOrdenDetencion +  '. Desde entonces hasta la fecha han transcurrido ' + iDiasTrans +', sin que la misma haya sido indagada o resuelta su situación jurídica.',
            c2p3='La señora ' + iNombreA + ' se encuentra recluida en ' + iLugarD + ', a partir del día '+ iFecha + ' y el funcionario que ordenó su aprehensión es ' + iOrdenDetencion + ' quien se desempeña como ' + iAutoridadRealizo,
            c2p4='Efectuada la verificación de la violación de las garantías constitucionales y legales, solicito a usted ordenar la libertad inmediata de la señora ' + iNombreA + ' y compulsar copias para que se inicien las investigaciones a que hubiere lugar'
        //Strings de Caso 3
        var c3p1="Yo, "+ iNombreS + ', en mi condición de ' + condicion + ', '+ mayoriaEdad +' y vecine de la ciudad de ' + iCiudadS + ', identificade con cédula de ciudadanía '+ iNumeroCCS +' de '+ iCiudadCC + ', por medio del presente escrito acudo ante la autoridad judicial para solicitar se sirva dar trámite a la petición de HÁBEAS CORPUS en favor de ' + iNombreA + ', con fundamento en los siguientes:',
            c3p2=iNombreA + ' fue aprendide por' + iAutoridadRealizo + ' el pasado ' + iFecha + ' en ' + iCiudadS + 'por orden de ' + iOrdenDetencion +  '. Desde entonces hasta la fecha han transcurrido ' + iDiasTrans + ', sin que le misme haya sido indagade o resuelta su situación jurídica.',
            c3p3=iNombreA + ' se encuentra recluide en ' + iLugarD + ', a partir del día ' + iFecha + ' y el funcionario que ordenó su aprehensión es ' + iOrdenDetencion + ' quien se desempeña como ' + iAutoridadRealizo,
            c3p4='Efectuada la verificación de la violación de las garantías constitucionales y legales, solicito a usted ordenar la libertad inmediata de ' + iNombreA + ' y compulsar copias para que se inicien las investigaciones a que hubiere lugar'
            //splits
            var splitiHecho =doc.splitTextToSize(iHechos,150)
            //splits parrafos
            var splitp1=doc.splitTextToSize(p1,150),
                splitp2=doc.splitTextToSize(p2,150),
                splitp3=doc.splitTextToSize(p3,150),
                splitp4=doc.splitTextToSize(p4,150)
            //splits caso1
            var split1C1P1=doc.splitTextToSize(c1p1,150),
                split1C1P2=doc.splitTextToSize(c1p2,150),
                split1C1P3=doc.splitTextToSize(c1p3,150),
                split1C1P4=doc.splitTextToSize(c1p4,150)
            //splits caso2
            var split1C2P1=doc.splitTextToSize(c2p1,150),
                split1C2P2=doc.splitTextToSize(c2p2,150),
                split1C2P3=doc.splitTextToSize(c2p3,150),
                split1C2P4=doc.splitTextToSize(c2p4,150)
            //splits caso3
            var split1C3P1=doc.splitTextToSize(c3p1,150),
                split1C3P2=doc.splitTextToSize(c3p2,150),
                split1C3P3=doc.splitTextToSize(c3p3,150),
                split1C3P4=doc.splitTextToSize(c3p4,150)
     
    //Metodos


    doc.text(iCiudadS,30,10)
    doc.text(fecha,30,20)
    doc.text('Señor,',30,35)
    
    doc.setFontType('bold')
    doc.text('JUEZ',30,45)

    doc.setFontType('normal')
    doc.text('de'+ iCiudadS, 42,45)

    doc.setFontType('bold')
    doc.text('E.S.D.',30,55)
    //Caso 1.
    if(generoS==='1')
    {   
        doc.setFontType('normal')
        doc.text(split1C1P1, 30,70)
        if(generoA ==='1'){
        doc.setFontType('bold')
        doc.text("HECHOS",100,115, 'center') 
        doc.setFontType('normal')
        if(situacion.value === '1'){
            doc.text(split1C1P2,30,125)
        }
        else{
            doc.text(split1C1P3,30,125)
        }

        doc.setFontType('normal')
        doc.text(splitiHecho, 30,155)
        
        doc.setFontType('Times','bold')
        doc.text('JURAMENTO', 100, 200 ,'center')
    
        doc.setFontType('normal')
        doc.text(splitp1,30,210)
    
        doc.addPage()

        doc.setFontType('bold')
        doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
    
        doc.setFontType('normal')
        doc.text(splitp2,30,35)
        
        doc.setFontType('normal')
        doc.text(splitp3,30,95)
    
        doc.setFontType( 'italic')
        doc.text(splitp4,30,110)
    
        doc.setFontType('bold')
        doc.text('SOLICITUD',100,180,'center')

        doc.setFontType('normal')
        doc.text(split1C1P4, 30,190)
    }
    else if(generoA==='2'){
        doc.setFontType('bold')
            doc.text("HECHOS",100,115, 'center') 
            doc.setFontType('normal')
            if(situacion.value === '1'){
                doc.text(split1C2P2,30,125)
            }
            else{
                doc.text(split1C2P3,30,125)
            }
    

            doc.text(splitiHecho, 30,155)
            
            doc.setFontType('Times','bold')
            doc.text('JURAMENTO', 100, 200 ,'center')
        
            doc.setFontType('normal')
            doc.text(splitp1,30,210)
        
            doc.addPage()
    
            doc.setFontType('bold')
            doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
        
            doc.setFontType('normal')
            doc.text(splitp2,30,35)
            
            doc.setFontType('normal')
            doc.text(splitp3,30,95)
        
            doc.setFontType( 'italic')
            doc.text(splitp4,30,110)
        
            doc.setFontType('bold')
            doc.text('SOLICITUD',109,180,'center')

            doc.setFontType('normal')
            doc.text(split1C2P4, 30,190)
    }
    else{
        
        doc.setFontType('bold')
        doc.text("HECHOS",100,115, 'center') 
        doc.setFontType('normal')
        if(situacion.value === '1'){
            doc.text(split1C3P2,30,125)
        }
        else{
            doc.text(split1C3P3,30,125)
        }

        doc.setFontType('normal')
        doc.text(splitiHecho, 30,155)
        
        doc.setFontType('Times','bold')
        doc.text('JURAMENTO', 100, 200 ,'center')
    
        doc.setFontType('normal')
        doc.text(splitp1,30,210)
    
        doc.addPage()

        doc.setFontType('bold')
        doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
    
        doc.setFontType('normal')
        doc.text(splitp2,30,35)
        
        doc.setFontType('normal')
        doc.text(splitp3,30,95)
    
        doc.setFontType( 'italic')
        doc.text(splitp4,30,110)
    
        doc.setFontType('bold')
        doc.text('SOLICITUD',100,180,'center')

        doc.setFontType('normal')
        doc.text(split1C3P4, 30,190)
    }
    }

    //Caso 2
    else if(generoS.value ==='2')
        {
            doc.text(split1C2P1, 30,70)
        
            if(generoA ==='1'){
                doc.setFontType('bold')
                doc.text("HECHOS",100,115, 'center') 
                doc.setFontType('normal')
                if(situacion.value === '1'){
                    doc.text(split1C1P2,30,125)
                }
                else{
                    doc.text(split1C1P3,30,125)
                }
        
                doc.setFontType('normal')
                doc.text(splitiHecho, 30,155)
                
                doc.setFontType('Times','bold')
                doc.text('JURAMENTO', 100, 200 ,'center')
            
                doc.setFontType('normal')
                doc.text(splitp1,30,210)
            
                doc.addPage()
        
                doc.setFontType('bold')
                doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
            
                doc.setFontType('normal')
                doc.text(splitp2,30,35)
                
                doc.setFontType('normal')
                doc.text(splitp3,30,95)
            
                doc.setFontType( 'italic')
                doc.text(splitp4,30,110)
            
                doc.setFontType('bold')
                doc.text('SOLICITUD',100,180,'center')
        
                doc.setFontType('normal')
                doc.text(split1C1P4, 30,190)
            }
            else if(generoA==='2'){
                doc.setFontType('bold')
                    doc.text("HECHOS",100,115, 'center') 
                    doc.setFontType('normal')
                    if(situacion.value === '1'){
                        doc.text(split1C2P2,30,125)
                    }
                    else{
                        doc.text(split1C2P3,30,125)
                    }
            
        
                    doc.text(splitiHecho, 30,155)
                    
                    doc.setFontType('Times','bold')
                    doc.text('JURAMENTO', 100, 200 ,'center')
                
                    doc.setFontType('normal')
                    doc.text(splitp1,30,210)
                
                    doc.addPage()
            
                    doc.setFontType('bold')
                    doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
                
                    doc.setFontType('normal')
                    doc.text(splitp2,30,35)
                    
                    doc.setFontType('normal')
                    doc.text(splitp3,30,95)
                
                    doc.setFontType( 'italic')
                    doc.text(splitp4,30,110)
                
                    doc.setFontType('bold')
                    doc.text('SOLICITUD',109,180,'center')
        
                    doc.setFontType('normal')
                    doc.text(split1C2P4, 30,190)
            }
            else{
                
                doc.setFontType('bold')
                doc.text("HECHOS",100,115, 'center') 
                doc.setFontType('normal')
                if(situacion.value === '1'){
                    doc.text(split1C3P2,30,125)
                }
                else{
                    doc.text(split1C3P3,30,125)
                }
        
                doc.setFontType('normal')
                doc.text(splitiHecho, 30,155)
                
                doc.setFontType('Times','bold')
                doc.text('JURAMENTO', 100, 200 ,'center')
            
                doc.setFontType('normal')
                doc.text(splitp1,30,210)
            
                doc.addPage()
        
                doc.setFontType('bold')
                doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
            
                doc.setFontType('normal')
                doc.text(splitp2,30,35)
                
                doc.setFontType('normal')
                doc.text(splitp3,30,95)
            
                doc.setFontType( 'italic')
                doc.text(splitp4,30,110)
            
                doc.setFontType('bold')
                doc.text('SOLICITUD',100,180,'center')
        
                doc.setFontType('normal')
                doc.text(split1C3P4, 30,190)
            }
            
        }
        //Caso 3
    else{
        doc.text(split1C3P1, 30,70)
        
        if(generoA ==='1'){
            doc.setFontType('bold')
            doc.text("HECHOS",100,115, 'center') 
            doc.setFontType('normal')
            if(situacion.value === '1'){
                doc.text(split1C1P2,30,125)
            }
            else{
                doc.text(split1C1P3,30,125)
            }
    
            doc.setFontType('normal')
            doc.text(splitiHecho, 30,155)
            
            doc.setFontType('Times','bold')
            doc.text('JURAMENTO', 100, 200 ,'center')
        
            doc.setFontType('normal')
            doc.text(splitp1,30,210)
        
            doc.addPage()
    
            doc.setFontType('bold')
            doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
        
            doc.setFontType('normal')
            doc.text(splitp2,30,35)
            
            doc.setFontType('normal')
            doc.text(splitp3,30,95)
        
            doc.setFontType( 'italic')
            doc.text(splitp4,30,110)
        
            doc.setFontType('bold')
            doc.text('SOLICITUD',100,180,'center')
    
            doc.setFontType('normal')
            doc.text(split1C1P4, 30,190)
        }
        else if(generoA==='2'){
            doc.setFontType('bold')
                doc.text("HECHOS",100,115, 'center') 
                doc.setFontType('normal')
                if(situacion.value === '1'){
                    doc.text(split1C2P2,30,125)
                }
                else{
                    doc.text(split1C2P3,30,125)
                }
        
    
                doc.text(splitiHecho, 30,155)
                
                doc.setFontType('Times','bold')
                doc.text('JURAMENTO', 100, 200 ,'center')
            
                doc.setFontType('normal')
                doc.text(splitp1,30,210)
            
                doc.addPage()
        
                doc.setFontType('bold')
                doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
            
                doc.setFontType('normal')
                doc.text(splitp2,30,35)
                
                doc.setFontType('normal')
                doc.text(splitp3,30,95)
            
                doc.setFontType( 'italic')
                doc.text(splitp4,30,110)
            
                doc.setFontType('bold')
                doc.text('SOLICITUD',109,180,'center')
    
                doc.setFontType('normal')
                doc.text(split1C2P4, 30,190)
        }
        else{
            
            doc.setFontType('bold')
            doc.text("HECHOS",100,115, 'center') 
            doc.setFontType('normal')
            if(situacion.value === '1'){
                doc.text(split1C3P2,30,125)
            }
            else{
                doc.text(split1C3P3,30,125)
            }
    
            doc.setFontType('normal')
            doc.text(splitiHecho, 30,155)
            
            doc.setFontType('Times','bold')
            doc.text('JURAMENTO', 100, 200 ,'center')
        
            doc.setFontType('normal')
            doc.text(splitp1,30,210)
        
            doc.addPage()
    
            doc.setFontType('bold')
            doc.text('FUNDAMENTOS DE DERECHO',100,25,'center')
        
            doc.setFontType('normal')
            doc.text(splitp2,30,35)
            
            doc.setFontType('normal')
            doc.text(splitp3,30,95)
        
            doc.setFontType( 'italic')
            doc.text(splitp4,30,110)
        
            doc.setFontType('bold')
            doc.text('SOLICITUD',100,180,'center')
    
            doc.setFontType('normal')
            doc.text(split1C3P4, 30,190)
        }
    }

    doc.setFontType('bold')
    doc.text('Del señor juez, atentamente', 30,220)

    doc.text(iNombreS,30, 240)
    doc.text('Nombres y apellidos del peticionario:',30,250)
    doc.text('Cedula de ciudadanía',30,255)
    doc.text('Dirección:',30,260)
    doc.text('Teléfono:',30,265)
    doc.text('Correo Electronico:',30,270)

    doc.setFontType('normal')
    doc.text(iNombreS,100,250)
    doc.text(iNumeroCCS,70,255)
    doc.text(iDireccionS,50,260)
    doc.text(iNumeroCelular,48,265)
    doc.text(iEmail,67,270)

    doc.save('HabeasCorpus.pdf')
}
botonGenerar.addEventListener('click',exportPDF,true);