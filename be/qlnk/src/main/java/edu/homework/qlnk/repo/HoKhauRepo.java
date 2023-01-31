package edu.homework.qlnk.repo;

import edu.homework.qlnk.repo.entity.HoKhauEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * This class was created at 1/29/2023 22:13:42
 *
 * @author Minh.LN
 */
@Repository
public interface HoKhauRepo extends JpaRepository<HoKhauEntity, Integer> {
    List<HoKhauEntity> findAllByIsActive(Integer isActive);

    HoKhauEntity findByIdAndIsActive(Integer id, Integer isActive);

    List<HoKhauEntity> findAllByMaHoKhauAndIsActive(String maHoKhau, Integer isActive);
}
