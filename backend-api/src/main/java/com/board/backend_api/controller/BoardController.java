package com.board.backend_api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.board.backend_api.domain.dto.BoardSaveRequst;
import com.board.backend_api.domain.dto.BoardUpdateRequst;
import com.board.backend_api.service.BoardService;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
public class BoardController {
	
	private final BoardService service;//생성자 DI

	@PostMapping("/api/boards")
	public ResponseEntity<?> create(@RequestBody BoardSaveRequst dto) {

		return service.createBoard(dto);
	}
	
	@GetMapping("/api/boards")
	public ResponseEntity<?> getBoardList() {
		return service.getBoardList();
	}
	
	//상세페이지 조회
	@GetMapping("/api/boards/{id}")
	public ResponseEntity<?> getBoard(@PathVariable(name = "id") Long id) {
		
		return service.getBoard(id);
	}
	//수정처리
	@PutMapping("/api/boards/{id}")
	public ResponseEntity<?> update(
			@PathVariable(name = "id") Long id,
			@RequestBody BoardUpdateRequst dto) {
			
		
		return service.updateBoard(id, dto);
	}
	
	//삭제 처리
	@DeleteMapping("/api/boards/{id}")
	public ResponseEntity<?> delete(@PathVariable(name = "id") Long id) {
		
		return service.deleteBoard(id);
	}
	
	

}
