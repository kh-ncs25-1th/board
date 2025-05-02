package com.board.backend_api.service;

import com.board.backend_api.domain.dto.user.UserCreateRequest;
import com.board.backend_api.domain.dto.user.UserResponse;

public interface UserService {

	UserResponse create(UserCreateRequest request);

}
