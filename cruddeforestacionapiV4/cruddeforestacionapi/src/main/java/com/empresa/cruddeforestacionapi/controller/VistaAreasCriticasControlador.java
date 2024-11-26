package com.empresa.cruddeforestacionapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empresa.cruddeforestacionapi.dto.VistaAreaCriticaDTO;
import com.empresa.cruddeforestacionapi.service.VistaAreasCriticasServicio;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/api/vista-areas-criticas")
public class VistaAreasCriticasControlador {
    
    @Autowired
    private VistaAreasCriticasServicio vistaAreasCriticasServicio;

    @GetMapping
    public List<VistaAreaCriticaDTO> obtenerVistaAreasCriticas() {
        return vistaAreasCriticasServicio.obtenerVistaAreasCriticas();
    }
    

}
