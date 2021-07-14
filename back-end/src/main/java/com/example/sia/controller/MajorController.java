package com.example.sia.controller;

import com.example.sia.application.service.MajorService;
import com.example.sia.data.dto.EditMajorDto;
import com.example.sia.domain.entity.Major;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class MajorController {
    @Autowired
    private MajorService majorService;

    @PostMapping(value = "/addMajor")
    public Major addMajor(@RequestBody final Major major){
        return this.majorService.addMajor(major);
    }

    @GetMapping(value = "/findAllMajor")
    public List<Major> findAllMajor (){
        return this.majorService.findAll();
    }

    @GetMapping(value = "/getOneMajor/{idMajor}")
    public Major getOne(@PathVariable("idMajor") Long idMajor){
        return this.majorService.getOneMajor(idMajor);
    }

    @PostMapping(value = "/updateMajor/{idMajor}")
    public void updateMajor(@PathVariable("idMajor") Long idMajor, @RequestBody EditMajorDto editMajorDto){
        this.majorService.updateMajor(idMajor, editMajorDto.getCode(), editMajorDto.getName());
    }

    @DeleteMapping(value = "/deleteMajor/{idMajor}")
    public void deleteMajor(@PathVariable("idMajor") Long idMajor){
        this.majorService.removeMajor(idMajor);
    }

}
