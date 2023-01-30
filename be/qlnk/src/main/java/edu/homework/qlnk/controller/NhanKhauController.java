package edu.homework.qlnk.controller;

import edu.homework.qlnk.repo.dto.HoKhauDTO;
import edu.homework.qlnk.repo.dto.NhanKhauDTO;
import edu.homework.qlnk.service.NhanKhauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class was created at 1/29/2023 22:16:13
 *
 * @author Minh.LN
 */
@RestController
@RequestMapping("/api/v1")
public class NhanKhauController {
    @Autowired
    NhanKhauService nhanKhauService;
    @GetMapping("/nhankhaus")
    ResponseEntity<Object> getAll(){
        List<NhanKhauDTO> dtoList = nhanKhauService.getAll();
        return ResponseEntity.ok(dtoList);
    }

    @GetMapping("/nhankhau")
    ResponseEntity<Object> search(@RequestParam(required = false) Integer id, @RequestParam(required = false) String hoten){

        if (id != null) return nhanKhauService.get(id);
        if (hoten != null) return nhanKhauService.getByHoten(hoten);
        return ResponseEntity.badRequest().body("no input found");
    }

    @PostMapping("/nhankhau")
    ResponseEntity<Object> add(@RequestBody NhanKhauDTO nhanKhauDTO){
        nhanKhauDTO.setId(null);
        return nhanKhauService.save(nhanKhauDTO);
    }

    @PutMapping("/nhankhau")
    ResponseEntity<Object> edit(@RequestBody NhanKhauDTO nhanKhauDTO){
        return nhanKhauService.save(nhanKhauDTO);
    }

    @DeleteMapping("/nhankhau/{id}")
    ResponseEntity<Object> delete(@PathVariable("id") Integer id){
        return nhanKhauService.delete(id);
    }

}
