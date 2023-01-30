package edu.homework.qlnk.service;

import edu.homework.qlnk.repo.NhanKhauRepo;
import edu.homework.qlnk.repo.dto.HoKhauDTO;
import edu.homework.qlnk.repo.dto.NhanKhauDTO;
import edu.homework.qlnk.repo.entity.HoKhauEntity;
import edu.homework.qlnk.repo.entity.NhanKhauEntity;
import edu.homework.qlnk.repo.mapper.NhanKhauMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * This class was created at 1/29/2023 22:20:42
 *
 * @author Minh.LN
 */
@Service
public class NhanKhauService {
    @Autowired
    NhanKhauRepo nhanKhauRepo;

    @Autowired
    NhanKhauMapper nhanKhauMapper;

    public List<NhanKhauDTO> getAll(){
        List<NhanKhauEntity> entityList = nhanKhauRepo.findAllByIsActive(1);
        List<NhanKhauDTO> dtoList = nhanKhauMapper.toDto(entityList);
        return dtoList;
    }

    public ResponseEntity<Object> get(Integer id){
        NhanKhauEntity entity = nhanKhauRepo.findByIdAndIsActive(id, 1);
        if (entity == null) return ResponseEntity.badRequest().body("not found");
        NhanKhauDTO dto = nhanKhauMapper.toDto(entity);
        return ResponseEntity.ok(dto);
    }

    public ResponseEntity<Object> getByHoten(String hoten){
        List<NhanKhauEntity> entity = nhanKhauRepo.findByHoTenAndIsActive(hoten, 1);
        if (entity == null || entity.isEmpty()) return ResponseEntity.badRequest().body("not found");
        List<NhanKhauDTO> dto = nhanKhauMapper.toDto(entity);
        return ResponseEntity.ok(dto);
    }

    public ResponseEntity<Object> save(NhanKhauDTO nhanKhauDTO){
        try {
            NhanKhauEntity entity = nhanKhauMapper.toEntity(nhanKhauDTO);
            nhanKhauRepo.save(entity);
            return ResponseEntity.ok("success");
        } catch(Exception e){
            return ResponseEntity.badRequest().body("not success");
        }
    }

    public ResponseEntity<Object> delete(Integer id){
        try {
            NhanKhauEntity entity = nhanKhauRepo.findByIdAndIsActive(id, 1);
            if (entity == null) return ResponseEntity.badRequest().body("not found");
            entity.setIsActive(0);
            nhanKhauRepo.save(entity);
            return ResponseEntity.ok("success");
        } catch(Exception e){
            return ResponseEntity.badRequest().body("not success");
        }
    }
}
