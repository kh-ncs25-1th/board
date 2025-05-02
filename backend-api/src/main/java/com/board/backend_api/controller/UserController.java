package com.board.backend_api.controller;

import org.springframework.web.bind.annotation.RestController;

import com.board.backend_api.domain.dto.user.UserCreateRequest;
import com.board.backend_api.domain.dto.user.UserResponse;
import com.board.backend_api.service.UserService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private final UserService service;
	
	@PostMapping
	public ResponseEntity<UserResponse> create(@RequestBody UserCreateRequest request) {
		return ResponseEntity.ok(service.create(request));
	}
	
}
