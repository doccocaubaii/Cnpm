package edu.homework.qlnk.repo.mapper;

import edu.homework.qlnk.repo.dto.NhanKhauDTO;
import edu.homework.qlnk.repo.entity.NhanKhauEntity;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface NhanKhauMapper extends EntityMapper<NhanKhauDTO, NhanKhauEntity> {
}
