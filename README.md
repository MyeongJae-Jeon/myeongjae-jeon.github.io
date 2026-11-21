# Myeong Jae Jeon · Academic website

GitHub Pages로 운영하는 개인 홈페이지입니다. Mac에서 이 폴더의 `index.html`을 브라우저로 열면 게시 전에 확인할 수 있습니다.

## 처음 게시하기

이 폴더는 [GitHub 저장소](https://github.com/MyeongJae-Jeon/myeongjae-jeon.github.io)의 `main` 브랜치와 연결되어 있습니다. 터미널에서 이 폴더를 열고 다음 명령을 실행합니다.

```sh
git status
git add index.html talks.html activities.html style.css cv.pdf .nojekyll .gitignore README.md
git commit -m "Publish academic website"
git push origin main
```

[Settings → Pages](https://github.com/MyeongJae-Jeon/myeongjae-jeon.github.io/settings/pages)는 이미 **Deploy from a branch → main → /(root)**로 설정되어 있습니다. [Actions](https://github.com/MyeongJae-Jeon/myeongjae-jeon.github.io/actions)에서 배포가 성공하면 [myeongjae-jeon.github.io](https://myeongjae-jeon.github.io/)에서 확인할 수 있습니다. 배포에는 최대 10분 정도 걸릴 수 있습니다.

[GitHub Pages 공식 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## 내용 수정하기

| 수정할 내용 | 파일 |
| --- | --- |
| 소개, 연구 관심사, 논문, 학위논문 | `index.html` |
| 연구 및 세미나 발표 | `talks.html` |
| 학회, 워크숍, 여름학교 | `activities.html` |
| CV | `cv.pdf` |
| 색상, 글꼴, 여백 | `style.css` |

- **GitHub 웹에서 수정**하려면 파일을 열고 연필 아이콘 **Edit this file**을 누릅니다. 수정한 뒤 **Commit changes**로 `main`에 저장합니다. CV는 **Add file → Upload files**에서 같은 이름의 `cv.pdf`를 올려 교체할 수 있습니다.
- **Mac에서 수정**하려면 먼저 `git pull --ff-only`로 GitHub의 최신 버전을 가져옵니다. 파일을 수정하고 브라우저에서 확인한 다음, 변경한 파일을 `git add`하고 `git commit`과 `git push origin main`을 실행합니다. 예를 들어 CV만 바꿨다면 `git add cv.pdf`를 실행합니다.

논문이나 발표를 추가하려면 같은 섹션에서 `<li class="entry">…</li>` 또는 `<li class="entry event">…</li>` 한 항목을 복사한 뒤 제목, 날짜, 링크를 바꿉니다. 연락처나 메뉴를 수정할 때는 세 HTML 파일에 같은 내용을 반영합니다. `main`에 저장된 변경은 GitHub Pages가 자동으로 게시합니다.

[GitHub 파일 편집 문서](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
