import React, { useEffect, useState, useContext } from 'react';
import { Container, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Ibge from '../../api/ibge';
import Positionstack from '../../api/positionstack';
import StateContext from '../../context/state';
import './style.css';

const FormBusca = () => {
    const [ufList, setUfList] = useState([]);
    const [cidadeList, setCidadeList] = useState([]);
    const { setLocalidade, setShow } = useContext(StateContext);
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');

    useEffect(() => {
      const loadUf = async () => {
        let list = await Ibge.getUfList();
        setUfList(list);
      };
      loadUf();
    }, []);
  
    const handleChangeUf = (evento) => {
      const loadCidade = async () => {
        let list = await Ibge.getCidadeList(evento.target.value);
        setCidade('');
        setUf(evento.target.value)
        setCidadeList(list);
      };
      loadCidade();
    };

    const handleChangeCidade = (evento) => {
        setCidade(evento.target.value);
      };

    const handleClickConsultar = () => {
        if(uf && cidade){
            const loadGeolocation = async () => {
                let geolocation = await Positionstack.getGeolocation(cidade, uf);
                setLocalidade({latitude: geolocation.data[0].latitude, longitude: geolocation.data[0].longitude});
                setShow(true);
            };
            loadGeolocation();
        }
    };
  
    return (
        <Container className="container-formbusca" component="article" maxWidth="sm">
            <div className="campos-consulta">
                <FormControl className="select-uf-control">
                    <InputLabel id="select-uf-label">UF</InputLabel>
                    <Select labelId="select-uf-label" value={uf} onChange={handleChangeUf}>
                    {ufList.map((item, key) => {
                        return (
                        <MenuItem key={key} value={item.sigla}>
                            {item.sigla}
                        </MenuItem>
                        );
                    })}
                    </Select>
                </FormControl>
                <FormControl className="select-cidade-control">
                    <InputLabel id="select-cidade-label">Cidade</InputLabel>
                    <Select labelId="select-cidade-label" value={cidade} onChange={handleChangeCidade} >
                    {cidadeList.map((item, key) => {
                        return (
                        <MenuItem key={key} value={item.nome}>
                            {item.nome}
                        </MenuItem>
                        );
                    })}
                    </Select>
                </FormControl>
                <Button className="botao-consultar" variant="contained" color="primary" onClick={handleClickConsultar}>
                    Consultar
                </Button>
            </div>
        </Container>
    );
}

export default FormBusca;