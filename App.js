
import { useState, useRef } from 'react';
import { Text, View,TextInput,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { view,viewChilds } from './assets/styles/styles';

export default function App() {
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [definitiva, setDefinitiva] = useState('');
  const [observacion, setObservacion] = useState('');
  const [datosUsuario, setDatosUsuario] = useState([]);

  const guardarcalcular = () => {
    parseInt(identificacion);
    parseInt(definitiva);
    let resultadoDefinitiva = 0;
    if(identificacion.trim()){
      if(nombres.trim()){
        if(asignatura.trim()){
          if(nota1.trim() && nota1 <= 5){
            if(nota2.trim() && nota2 <= 5){
              if(nota3.trim() && nota3 <= 5){
                resultadoDefinitiva = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3
                if(resultadoDefinitiva >= 3){
                  setObservacion('Aprueba');
                  let observacionFinal = 'Aprueba';
                  setDefinitiva(resultadoDefinitiva);
                  guardar(resultadoDefinitiva,observacionFinal);
                } else if(resultadoDefinitiva >= 2 && resultadoDefinitiva <= 2.94){
                  setObservacion('Habilita');
                  let observacionFinal = 'Habilita';
                  setDefinitiva(resultadoDefinitiva);
                  guardar(resultadoDefinitiva,observacionFinal);
                } else if(resultadoDefinitiva < 2){
                  setObservacion('Reprueba');
                  let observacionFinal = 'Reprueba';
                  setDefinitiva(resultadoDefinitiva);
                  guardar(resultadoDefinitiva,observacionFinal);
                }
              } else {
                alert('Porfavor digite la nota del momento 3');
              }
            } else {  
            alert('Porfavor digite la nota del momento 2');
            }
          } else {
            alert('Porfavor digite la nota del momento 1');
          }
        } else {
          alert('Porfavor digite una asignatura');
        }
      } else {
        alert('Porfavor digite un nombre');
      }
    } else {
      alert('Porfavor digita la identificacion');
    }

    
  }

  const guardar = (resultadoDefinitiva,observacionFinal) => {
    setDatosUsuario(datos => [...datos,{
      identificacion:identificacion,nombres:nombres,asignatura:asignatura,nota1:nota1,nota2:nota2,nota3:nota3,definitiva:resultadoDefinitiva,observacion:observacionFinal
    }]);    
  }

  let buscar = () => {
    let identBuscar = datosUsuario.find(ident => ident.identificacion == identificacion);
    if(identBuscar != undefined){
      setNombres(identBuscar.nombres);
      setAsignatura(identBuscar.asignatura);
      setNota1(identBuscar.nota1);
      setNota2(identBuscar.nota2);
      setNota3(identBuscar.nota3);
      setDefinitiva(identBuscar.definitiva);
      setObservacion(identBuscar.observacion);
    } else {
      alert('nombre no hallado');
    }
  }

  const limpiar = () => {
    setNombres('');
    setAsignatura('');
    setIdentificacion('');
    setNota1('');
    setNota2('');
    setNota3('');
    setDefinitiva('');
    setObservacion('');
  }
  return (
    <View style={[view.container,view.alignViews]}>
      <Text style={[view.textTitle]}>Sistema de Notas</Text>
        <View style={[viewChilds.containerBackground]}>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Identificación: </Text>
              <TextInput 
                style={[viewChilds.containerInput]}
                keyboardType={Number}
                maxLength={20}
                onChangeText={identificacion => setIdentificacion(identificacion)}
                value={identificacion}
              ></TextInput>
            </View>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Nombres: </Text>
              <TextInput 
                style={[viewChilds.containerInput]}
                value={nombres}
                maxLength={100}
                onChangeText={nombres => setNombres(nombres)}>
              </TextInput>
            </View>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Asignatura: </Text>
              <TextInput 
                style={[viewChilds.containerInput]}
                value={asignatura}
                maxLength={100}
                onChangeText={asignatura => setAsignatura(asignatura)}>
              </TextInput>
            </View>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Nota Momento 1 (30%): </Text>
              <TextInput 
                style={[viewChilds.containerInput]}
                keyboardType={Number}
                maxLength={4}
                value={nota1}
                onChangeText={nota1 => setNota1(nota1)}>
              </TextInput>
            </View>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Nota Momento 2 (35%): </Text>
              <TextInput 
                style={[viewChilds.containerInput]}
                keyboardType={Number}
                value={nota2}
                maxLength={4}
                onChangeText={nota2 => setNota2(nota2)}>
              </TextInput>
            </View>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Nota Momento 3 (35%): </Text>
              <TextInput 
                style={[viewChilds.containerInput]}
                keyboardType={Number}
                value={nota3}
                maxLength={4}
                onChangeText={nota3 => setNota3(nota3)}>
              </TextInput>
            </View>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Defitiniva: {definitiva}</Text>
              <Text 
                style={[viewChilds.containerInput]}
                keyboardType={Number}
                value={definitiva}>
              </Text>
            </View>
            <View style={[viewChilds.containerDirection,viewChilds.containerDatos]}>
              <Text>Observación: </Text>
              <Text 
                style={[viewChilds.containerInput]}
                value={observacion}>{observacion}</Text>
            </View>
        </View>
        <View style={[viewChilds.containerDirection,viewChilds.containerButton,view.alignViews]}>
          <TouchableOpacity onPress={guardarcalcular} style={[viewChilds.button]}>
            <Text style={[viewChilds.textButton]}>Calcular/Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={buscar} style={[viewChilds.button]}>
            <Text style={[viewChilds.textButton]}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={limpiar} style={[viewChilds.button]}>
            <Text style={[viewChilds.textButton]}>Limpiar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}


