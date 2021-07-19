package com.example.sia.application.service;

import com.example.sia.data.repository.MajorRepository;
import com.example.sia.domain.entity.Major;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class MajorService {
    @Autowired
    private MajorRepository majorRepository;

    private Major major;

    public Major addMajor(Major major){
        Optional<Major> majorCodeAndName = this.majorRepository.findByCodeAndName(major.getCode(),major.getName());
        if (majorCodeAndName.isPresent()){
            throw new IllegalStateException("Major telah ada");
        }

        this.majorRepository.save(major);
        return major;
    }

    public List<Major> findAllMajorByStatus(){
        return this.majorRepository.findAllMajor(false);
    }

    public List<Major> findAllMajor(){
        return this.majorRepository.findAll();
    }

    public Major getOneMajor(Long idMajor){
        major = this.majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));

        return major;
    }

    @Transactional
    public void updateMajor(Long idMajor, String code, String name){
        major = this.majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ditemukan"));

        major.setCode(code);
        major.setName(name);
    }

    @Transactional
    public void deleteMajor(Long idMajor){
        major = this.majorRepository.findById(idMajor).orElseThrow(() -> new IllegalStateException("Major tidak ada"));

        major.setStatus_delete(true);
    }
}
