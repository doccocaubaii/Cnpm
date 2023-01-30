package edu.homework.qlnk.repo;

import edu.homework.qlnk.repo.entity.NhanKhauEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * This class was created at 1/29/2023 22:15:24
 *
 * @author Minh.LN
 */
@Repository
public interface NhanKhauRepo extends JpaRepository<NhanKhauEntity, Integer> {
    List<NhanKhauEntity> findAllByIsActive(Integer isActive);

    NhanKhauEntity findByIdAndIsActive(Integer id, Integer isActive);

    List<NhanKhauEntity> findByHoTenAndIsActive(String id, Integer isActive);
}
