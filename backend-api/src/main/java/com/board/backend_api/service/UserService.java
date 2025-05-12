package com.board.backend_api.service;

import com.board.backend_api.domain.dto.user.UserRequest;
import com.board.backend_api.domain.dto.user.UserResponse;

public interface UserService {

	UserResponse create(UserRequest request);

}
