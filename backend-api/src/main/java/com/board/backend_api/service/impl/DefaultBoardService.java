package com.board.backend_api.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.board.backend_api.domain.dto.board.BoardDeatilResponse;
import com.board.backend_api.domain.dto.board.BoardListItemResponse;
import com.board.backend_api.domain.dto.board.BoardSaveRequst;
import com.board.backend_api.domain.dto.board.BoardUpdateRequst;
import com.board.backend_api.domain.entity.BoardEntity;
import com.board.backend_api.domain.entity.BoardEntityRepository;
import com.board.backend_api.service.BoardService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class DefaultBoardService implements BoardService{

    	
	private final BoardEntityRepository repository;

	
	@Override
	public BoardListItemResponse create(BoardSaveRequst requst) {
		
		return BoardListItemResponse.fromEntity(repository.save(requst.toEntity()));
	}
	
	@Override
	public List<BoardListItemResponse> list() {
		return repository.findAll(Sort.by(Direction.DESC, "id")).stream()
				//.map(entity->{return BoardListItemResponse.fromEntity(entity);})
				//.map(entity->BoardListItemResponse.fromEntity(entity))
				.map(BoardListItemResponse::fromEntity)//java8-method reference ::
				.toList();//java16(17)-불변객체
				//.collect(Collectors.toList())
	}
	
	//상페페이지 처리로직
	//JPA의 더티 체킹을 활용한 효율적인 업데이트
	//조회수 업데이트 처리를 위해서 @Transactional
	@Transactional//org.springframework.transaction.annotation.Transactional;
	@Override
	public BoardDeatilResponse get(Long id) {
		return repository.findById(id)
				            .map(BoardEntity::incrementReadCount)
							.map(BoardDeatilResponse::fromEntity)
							.orElseThrow();
	}
	
	@Transactional
	@Override
	public BoardDeatilResponse update(Long id, BoardUpdateRequst requst) {
		
		return repository.findById(id)
				.map(entity->entity.update(requst))
				.map(BoardDeatilResponse::fromEntity)
				.orElseThrow();
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

	
}
