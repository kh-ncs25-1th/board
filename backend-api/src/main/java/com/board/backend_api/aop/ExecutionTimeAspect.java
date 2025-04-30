package com.board.backend_api.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Aspect
@Component
public class ExecutionTimeAspect {
	
	@Pointcut("execution(* com.board.backend_api.service.impl.*.*(..))")
	public void serviceLayer() {}
	
	@Pointcut("execution(* com.board.backend_api.controller.*.*(..))")
	public void controllerLayer() {}
	
	//@Around("execution(* com.board.backend_api.service.impl.*.*(..))")
	@Around("serviceLayer() || controllerLayer()")
	public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
		long startTime=System.currentTimeMillis();
		//서비스 실행
		Object result=joinPoint.proceed();//내가실행하는 모든 메서드
		
		long endTime=System.currentTimeMillis();
		long executionTime=endTime-startTime;
		
		//logging.level 기본적으로 info
		String methodName=joinPoint.getSignature().getName();
		String className=joinPoint.getTarget().getClass().getSimpleName();
		
		if(executionTime>50) {
			log.warn("클래스:{}-메서드:{}() 실행시간: {}ms",className,methodName,executionTime);
		}else {
			log.debug("클래스:{}-메서드:{}() 실행시간: {}ms",className,methodName,executionTime);
		}
		
		
		return result;
	}
}
/*
1. Aspect (관점)
	여러 클래스에 걸쳐있는 공통 기능을 모듈화한 것
	예: 로깅, 트랜잭션 관리, 실행 시간 측정 등
	@Aspect 어노테이션으로 구현
2. Join Point (조인 포인트)
	프로그램 실행 중의 특정 시점
	Spring AOP에서는 메서드 실행 시점을 의미
	예: UserService.createUser() 메서드가 실행되는 시점
3. Advice (어드바이스)
	조인 포인트에서 실행되는 실제 코드
	종류:
	@Before: 메서드 실행 전
	@After: 메서드 실행 후
	@Around: 메서드 실행 전후
	@AfterReturning: 메서드 정상 종료 후
	@AfterThrowing: 예외 발생 후
4. Pointcut (포인트컷)
	어떤 조인 포인트를 사용할지 결정하는 표현식
	예: execution(* com.board.backend_api.controller.*.*(..))
	"컨트롤러 패키지의 모든 메서드"를 의미
5. Target Object (대상 객체)
	AOP가 적용되는 실제 객체
	예: UserService, BoardController 등
6. AOP Proxy (프록시)
	AOP가 적용된 객체를 감싸는 프록시 객체
	Spring은 JDK 동적 프록시 또는 CGLIB 프록시 사용
7. Weaving (위빙)
	Aspect를 실제 객체와 연결하는 과정
	Spring은 런타임에 위빙 수행
*/
