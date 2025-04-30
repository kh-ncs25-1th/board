package com.board.backend_api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.board.backend_api.domain.dto.board.BoardDeatilResponse;
import com.board.backend_api.domain.dto.board.BoardListItemResponse;
import com.board.backend_api.domain.dto.board.BoardSaveRequst;
import com.board.backend_api.domain.dto.board.BoardUpdateRequst;
import com.board.backend_api.service.BoardService;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/boards")
public class BoardController {
	
	private final BoardService service;//생성자 DI

	//레이어드 계층별로 관심사를 분리:각 계층에서 처리하는 역할에 집중
	/**
	 * 새로운 게시글 생성
	 * @param requst 게시글 생성 요청 dto
	 * @return 생성된 게시글 정보 BoardListItemResponse
	 */
	@PostMapping
	public ResponseEntity<BoardListItemResponse> create(@RequestBody BoardSaveRequst requst) {
		return ResponseEntity.ok(service.create(requst));
	}
	
	/**
	 * 모든 게시글 목록 Read
	 * @return 게시글 목록 List<BoardListItemResponse>
	 */
	@GetMapping
	public ResponseEntity<List<BoardListItemResponse>> list() {
		return ResponseEntity.ok(service.list());
	}
	
	/**
	 * 특정 게시글 상세조회
	 * @param id - 게시글 ID
	 * @return 조회된 게시글 상세정보 BoardDeatilResponse
	 */
	@GetMapping("/{id}")
	public ResponseEntity<BoardDeatilResponse> get(@PathVariable(name = "id") Long id) {
		
		return ResponseEntity.ok(service.get(id));
	}
	
	/**
	 * 특정 게시글 수정처리
	 * @param id - 게시글 ID
	 * @param requst - 게시글 수정 요청 DTO
	 * @return 수정된 결과 게시글 정보 BoardDeatilResponse
	 */
	@PutMapping("/{id}")
	public ResponseEntity<BoardDeatilResponse> update(
			@PathVariable(name = "id") Long id,
			@RequestBody BoardUpdateRequst requst) {
		
		return ResponseEntity.ok(service.update(id, requst));
	}
	
	/**
	 * 특정 게시글 삭제
	 * @param id - 게시글 ID
	 * @return 삭제 결과
	 */
	@DeleteMapping("{id}")
	public ResponseEntity<Void> delete(@PathVariable(name = "id") Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();//204 No Content 상태코드 반환
		//return ResponseEntity.ok(true);//200
	}
	
	

}
