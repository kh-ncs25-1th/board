package com.board.backand_api.controller;

import org.springframework.web.bind.annotation.RestController;

import com.board.backand_api.domain.dto.BoardSaveRequst;
import com.board.backand_api.service.BoardService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


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
	
	

}
