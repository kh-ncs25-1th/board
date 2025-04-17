package com.board.backand_api.controller;

import org.springframework.web.bind.annotation.RestController;

import com.board.backand_api.domain.dto.BoardSaveRequst;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class BoardController {
	
	@PostMapping("/api/boards")
	public ResponseEntity<?> create(@RequestBody BoardSaveRequst dto) {
		System.out.println(dto);
		
		return ResponseEntity.ok(dto);
	}
	

}
