
function load(images) {
  len = images.length;
  i = 0;

  document.getElementById("arch_total").innerHTML = len;

  document.getElementById("arch_img").src = images[0];

  document.getElementById("pos").onclick = function changer_f() {
    i += 1;
    if (i > len - 1) {
      i = 0;
    }
    document.getElementById("arch_img").src = images[i];
    document.getElementById("arch_number").innerHTML = i + 1;
  };

  document.getElementById("pre").onclick = function changer_b() {
    i -= 1;
    if (i < 0) {
      i = len - 1;
    }
    document.getElementById("arch_img").src = images[i];
    document.getElementById("arch_number").innerHTML = i + 1;
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      i -= 1;
      if (i < 0) {
        i = len - 1;
      }
      document.getElementById("arch_img").src = images[i];
      document.getElementById("arch_number").innerHTML = i + 1;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      i += 1;
      if (i > len - 1) {
        i = 0;
      }
      document.getElementById("arch_img").src = images[i];
      document.getElementById("arch_number").innerHTML = i + 1;
    }
  });
}

function vertical() {
  ttl = 3;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      tmp = window.location.href;
      parent_path = tmp.replace(/(.*?)\d+\.html/, "$1");
      page_path = tmp.replace(/.*?(\d+)\.html/, "$1");

      page_path = parseInt(page_path);
      if (page_path < ttl) {
        page_path += 1;
      } else {
        return;
      }
      page_path = page_path.toString().padStart(2, 0);

      link = parent_path + page_path + ".html";
      window.location.href = link;
    }

    if (e.key === "ArrowUp") {
      tmp = window.location.href;
      parent_path = tmp.replace(/(.*?)\d+\.html/, "$1");
      page_path = tmp.replace(/.*?(\d+)\.html/, "$1");

      page_path = parseInt(page_path);
      if (page_path > 1) {
        page_path -= 1;
      } else {
        return;
      }
      page_path = page_path.toString().padStart(2, 0);

      link = parent_path + page_path + ".html";
      window.location.href = link;
    }
  });
}

vertical();
