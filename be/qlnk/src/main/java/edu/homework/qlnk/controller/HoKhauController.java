package edu.homework.qlnk.controller;

import edu.homework.qlnk.repo.dto.HoKhauDTO;
import edu.homework.qlnk.repo.dto.NhanKhauDTO;
import edu.homework.qlnk.service.HoKhauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class was created at 1/29/2023 22:19:22
 *
 * @author Minh.LN
 */
@RestController
@RequestMapping("/api/v1")
public class HoKhauController {
    @Autowired
    HoKhauService hoKhauService;

    @GetMapping("/hokhaus")
    ResponseEntity<Object> getAll(){
        List<HoKhauDTO> dtoList = hoKhauService.getAll();
        return ResponseEntity.ok(dtoList);
    }
    //

    @GetMapping("/hokhau")
    ResponseEntity<Object> search(@RequestParam(required = false) Integer id, @RequestParam(value = "mahokhau",required = false) String maHoKhau){

        if (id != null) return hoKhauService.get(id);
        if (maHoKhau != null) return hoKhauService.getByHoten(maHoKhau);
        return ResponseEntity.badRequest().body("no input found");
    }

    @PostMapping("/hokhau")
    ResponseEntity<Object> add(@RequestBody HoKhauDTO hoKhauDTO){
        hoKhauDTO.setId(null);
        return hoKhauService.save(hoKhauDTO);
    }

    @PutMapping("/hokhau/score/{maHoKhau}/{score}")
    ResponseEntity<Object> score(@PathVariable("score") Integer score, @PathVariable("maHoKhau") String maHoKhau){
        System.out.println(score);
        System.out.println(maHoKhau);
        Object o = hoKhauService.score(maHoKhau, score);
        return ResponseEntity.ok().body(o);
    }

    @PutMapping("/hokhau")
    ResponseEntity<Object> edit(@RequestBody HoKhauDTO hoKhauDTO){
        return hoKhauService.save(hoKhauDTO);
    }

    @DeleteMapping("/hokhau/{id}")
    ResponseEntity<Object> delete(@PathVariable("id") Integer id){
        return hoKhauService.delete(id);
    }
}
