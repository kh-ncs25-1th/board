package com.board.backand_api.service.impl;

import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.board.backand_api.domain.dto.BoardSaveRequst;
import com.board.backand_api.domain.entity.BoardEntity;
import com.board.backand_api.domain.entity.BoardEntityRepository;
import com.board.backand_api.service.BoardService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class DefaultBoardService implements BoardService{

    	
	private final BoardEntityRepository repository;


	@Override
	public ResponseEntity<?> createBoard(BoardSaveRequst dto) {
		// db에 저장해....
		//db 접근 : jpa entity객체로 처리, repository
				
		BoardEntity result=repository.save(dto.toEntity());
		return ResponseEntity.ok(result!=null?true:false);
	}

	@Override
	public ResponseEntity<?> getBoardList() {
		// DB에 있는 게시글 모두 읽어서 페이지로 전달해줘
		/*
		List<BoardEntity> result=repository.findAll();
		List<BoardListResponse> response=new ArrayList<>();//성능이 좋지 못해요
		for(BoardEntity ent : result) {
			response.add(ent.toBoardListResponse());
		}
		*/
		
		return ResponseEntity.ok(repository.findAll(Sort.by(Direction.DESC, "id")).stream()										
										//.map((entity)->{return entity.toBoardListResponse();})
										.map(BoardEntity::toBoardListResponse)
										.collect(Collectors.toList())
		);
	}

	@Override
	public ResponseEntity<?> getBoard(Long id) {
		
		//Optional//java8 (null처리를 위해)
		return ResponseEntity.ok(repository.findById(id)
											.map(BoardEntity::toBoardDeatilResponse)
											.orElseThrow());
	}

}
