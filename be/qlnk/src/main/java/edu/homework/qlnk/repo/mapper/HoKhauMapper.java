package edu.homework.qlnk.repo.mapper;

import edu.homework.qlnk.repo.dto.HoKhauDTO;
import edu.homework.qlnk.repo.entity.HoKhauEntity;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface HoKhauMapper extends EntityMapper<HoKhauDTO, HoKhauEntity>{
}