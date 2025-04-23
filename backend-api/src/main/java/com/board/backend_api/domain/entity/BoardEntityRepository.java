package com.board.backend_api.domain.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.board.backend_api.domain.dto.BoardUpdateRequst;

@Repository
public interface BoardEntityRepository extends JpaRepository<BoardEntity, Long>{

	@Modifying//@Query 기본적으로 select 쿼리만 실행
	@Query("UPDATE BoardEntity b SET  b.title=:#{#dto.title} , b.content=:#{#dto.content}  WHERE b.id=:id")
	int updateBoard(@Param("id") Long id, @Param("dto") BoardUpdateRequst dto);

	@Modifying//update, delete 를 명시적 쿼리를 사용하면 사용해야함. 
	@Query("UPDATE BoardEntity b SET  b.title=?1 , b.content=?2  WHERE b.id=?3")
	int updateBoard(String title, String content, Long id);
	
	
}
