package com.board.backend_api.aop;

import org.apache.logging.log4j.util.StringBuilders;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;
/*
ERROR: 심각한 오류
WARN: 경고
INFO: 일반 정보
DEBUG: 디버깅 정보
TRACE: 상세한 디버깅 정보
 */
@Slf4j
@Aspect
@Component
public class ParameterLoggingAspect {
	
	private final ObjectMapper mapper=new ObjectMapper();
	
	@Before("execution(* com.board.backend_api.service.impl.*.*(..))")
	public void logMethodParameters(JoinPoint joinPoint) throws JsonProcessingException {
		//서비스 메서드의 파라미터 정보를 출력할려고요
		String classNmame=joinPoint.getTarget().getClass().getSimpleName();
		String methodName=joinPoint.getSignature().getName();
		
		
		
		StringBuilder sb=new StringBuilder();
		sb.append(classNmame).append("-").append(methodName).append(" 메서드호출 : ");
		
		Object[] args=joinPoint.getArgs();
		if(args != null && args.length>0) {
			for(int i=0;i<args.length; i++) {
				sb.append("파라미터[").append(i).append("]: ");
				if(args[i] !=null ) {
					sb.append(mapper.writeValueAsString(args[i]));
				}else {
					sb.append("null");
				}
				if(i < args.length-1) {
					sb.append(", ");
				}
				
			}
		}else {
			log.debug("{}-{} 파라미터 없음~",classNmame, methodName);
		}
		log.debug(sb.toString());
		
	}

}
