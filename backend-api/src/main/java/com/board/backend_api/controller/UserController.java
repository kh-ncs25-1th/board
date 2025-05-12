package com.board.backend_api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.board.backend_api.domain.dto.user.UserRequest;
import com.board.backend_api.domain.dto.user.UserResponse;
import com.board.backend_api.service.UserService;

import lombok.RequiredArgsConstructor;

import java.net.ResponseCache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RequiredArgsConstructor
@RequestMapping("/api/users")
@RestController
public class UserController {
	
	private final UserService service;//di
	
	
	//1.회원가입처리
	@PostMapping
	public ResponseEntity<UserResponse> create(@RequestBody UserRequest request) {
				
		return ResponseEntity.ok(service.create(request));
	}

	
	
	//2.회원조회(마이페이지)
	//3.회원수정(마이페이지)
	//4.회원삭제(마이페이지)

}
