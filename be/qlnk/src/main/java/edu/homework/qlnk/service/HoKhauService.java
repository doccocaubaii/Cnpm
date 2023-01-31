package edu.homework.qlnk.service;

import edu.homework.qlnk.repo.HoKhauRepo;
import edu.homework.qlnk.repo.dto.HoKhauDTO;
import edu.homework.qlnk.repo.dto.NhanKhauDTO;
import edu.homework.qlnk.repo.entity.HoKhauEntity;
import edu.homework.qlnk.repo.entity.NhanKhauEntity;
import edu.homework.qlnk.repo.mapper.HoKhauMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * This class was created at 1/29/2023 22:20:13
 *
 * @author Minh.LN
 */
@Service
public class HoKhauService {
    @Autowired
    HoKhauRepo hoKhauRepo;

    @Autowired
    HoKhauMapper hoKhauMapper;

    public List<HoKhauDTO> getAll(){
        List<HoKhauEntity> entityList = hoKhauRepo.findAllByIsActive(1);
        List<HoKhauDTO> dtoList = hoKhauMapper.toDto(entityList);
        return dtoList;
    }

    public ResponseEntity<Object> get(Integer id){
        HoKhauEntity entity = hoKhauRepo.findByIdAndIsActive(id, 1);
        if (entity == null) return ResponseEntity.badRequest().body("not found");
        HoKhauDTO dto = hoKhauMapper.toDto(entity);
        return ResponseEntity.ok(dto);
    }

    public ResponseEntity<Object> getByHoten(String maHoKhau){
        List<HoKhauEntity> entity = hoKhauRepo.findAllByMaHoKhauAndIsActive(maHoKhau, 1);
        if (entity == null || entity.isEmpty()) return ResponseEntity.badRequest().body("not found");
        List<HoKhauDTO> dto = hoKhauMapper.toDto(entity);
        return ResponseEntity.ok(dto);
    }
    public ResponseEntity<Object> save(HoKhauDTO hoKhauDTO){
        try {
            HoKhauEntity entity = hoKhauMapper.toEntity(hoKhauDTO);
            hoKhauRepo.save(entity);
            return ResponseEntity.ok("success");
        } catch(Exception e){
            return ResponseEntity.badRequest().body("not success");
        }
    }

    public ResponseEntity<Object> delete(Integer id){
        try {
            HoKhauEntity entity = hoKhauRepo.findByIdAndIsActive(id, 1);
            if (entity == null) return ResponseEntity.badRequest().body("not found");
            entity.setIsActive(0);
            hoKhauRepo.save(entity);
            return ResponseEntity.ok("success");
        } catch(Exception e){
            return ResponseEntity.badRequest().body("not success");
        }
    }
}
