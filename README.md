<div align="center">
<h2>Digging</h2>
<h3>'당신의 취향을 파다'</h3>
웹사이트 'Digging'은 수집품을 C2C 거래로 수수료 발생없이 물건을 구매 및 판매 할 수 있으며,<br>공통의 관심사를 가진 사람들이 모여 커뮤니티의 장이 될 수 있는 사이트입니다.
</div>

## 목차

- [개요](#개요)
- [프로젝트 설명](#프로젝트-설명)
- [프로젝트 설치 및 실행 방법](#프로젝트-설치-및-실행-방법)

## 개요

- 프로젝트명 : Digging
- 프로젝트 지속 기간 : 2023.11.13 ~ 2023.12.22
- 개발 엔진 및 언어 : React & Node.js & Python
- 팀원 : 김민석, 권민재, 김세준, 김연수, 이아인, 정재우

## 프로젝트 설명

| ![image](https://github.com/aforo3/digging_in/blob/main/20240102_150130.png?raw=true) |
| :-----------------------------------------------------------------------------------: |
|                                       메인 화면                                       |

2003년 12월 중고나라를 시작으로 2010년 번개장터, 2015년 당근마켓까지 급격하게 중고제품의 시장이 커져가는 중고 플랫폼의 영향력을 고려하여 중고 거래 사이트를 큰 틀로 잡고 시작하게 되었습니다. <br>
네이버 및 구글 뉴스에서 데이터 분석 시 중고 중에서도 품절, 수집품으로 이어지는 키워드를 찾아냈으며, 특히 MZ세대에게는<br>
'리셀' 이라는 단어가 의미 있는 키워드로 도달하게 되어 수집품 리셀에 대한 카테고리를 잡고 프로젝트를 기획하게 되었습니다. <br>

## 구현 기능

- 회원가입 시 다음 포스트코드를 활용하여 우편번호 서비스를 이용해 편리하게 주소 검색이 가능합니다.
- 댓글 작성 시 서버에 해당 내용이 전달 될 때 작성한 사용자의 정보까지 전달되어 어떤 사용자가 댓글을 작성했는 지 알 수 있습니다.
- 검색 기능은 props를 이용하여 각 카테고리 내에서만 검색 될 수 있으며, 정규표현식을 사용하여 겹치게 되는 단어만 있어도 검색이 가능합니다.
- 조회 수는 사용자가 게시글을 누를 때마다 서버에 요청하게 되어 서버에서 받아 올 때마다 조회수를 1씩 증가 시킵니다.
- 페이지네이션을 활용하여 게시글이 10개가 넘어 갈 경우 자동으로 다음 페이지로 넘어갑니다.
- 실시간 검색 순위는 flask 서버에서 Apscheduler를 이용하여 정해진 시간마다 데이터를 수집하여 순위를 보여줍니다.

## 버전 정보

- node.js v18.17.1
