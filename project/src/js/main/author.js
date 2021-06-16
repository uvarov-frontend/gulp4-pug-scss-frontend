function author() {
  let pass = '';

  const authorModal = document.createElement('div');
  authorModal.style.position = 'fixed';
  authorModal.style.zIndex = '999';
  authorModal.style.top = '0';
  authorModal.style.left = '0';
  authorModal.style.height = '100%';
  authorModal.style.width = '100%';
  authorModal.style.display = 'flex';
  authorModal.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
  authorModal.style.justifyContent = 'center';
  authorModal.style.alignItems = 'center';
  authorModal.style.fontSize = '0';
  authorModal.innerHTML = '<div><a href="https://bit.ly/2rfHcRo" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABPCAYAAADVyUgyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTItMDJUMTk6NTA6MzcrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTItMDJUMTk6NTA6MzcrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTEyLTAyVDE5OjUwOjM3KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhiYTMwODg1LWUxYzctNGJjZS1hZDE4LWRkM2Y1YzQwMGM5MiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjkzMWMwZjI4LWYwN2QtY2E0OS1iZDg2LWU1ZDZlOGExNDNkMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQwNDY3ZjdhLTA3NDMtNDc3My04YWU4LTA2ZWU5NjFmMmZjNCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA0NjdmN2EtMDc0My00NzczLThhZTgtMDZlZTk2MWYyZmM0IiBzdEV2dDp3aGVuPSIyMDE4LTEyLTAyVDE5OjUwOjM3KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGJhMzA4ODUtZTFjNy00YmNlLWFkMTgtZGQzZjVjNDAwYzkyIiBzdEV2dDp3aGVuPSIyMDE4LTEyLTAyVDE5OjUwOjM3KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJodHRwczovL3dlYmJyYWNlLnJ1IiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJodHRwczovL3dlYmJyYWNlLnJ1Ii8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iV0VCQlJBQ0UiIHBob3Rvc2hvcDpMYXllclRleHQ9IldFQkJSQUNFIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iZGV2ZWxvcGVkIGJ5IiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJkZXZlbG9wZWQgYnkiLz4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5GOEZBRkRGOUEwNzUwNUY5NUFEQTlDRUQyMjM4QjIyNjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqjfKo8AAA1aSURBVHic7Z3tdeuqEoZf7roNuAWfErxL8C7BpwTvEpwSvEuIS0hKSEqIS4hLsEvg/ICJMAZmkPVhknnWYkWWEIMII2AEg7HWQqnDGLMCsLTWvhpjphL7AuAI4O9UAoWsACwBvGaubwCc4PJ+g9a/+/jf3BlolC2A/cQySVEeDa4sXnwcZQRUgRWlYVSBFaVhVIEZjDFbY8ynMcb6vzsAi0TULYBPANb/3fnze7huZMwawJv/y6WRYwPgw8c/A3jGbTf7zae7i9LeVDxD6XqqLGIWJfnGmGdjzHN8kzFmZYx5M8as42uKx1qrIRPglM/CKcEOTkHO/txnYICheC9BPOv/bv1xXAnffFqSNABX6Z8T8eO8nXGtxDY4/+zjvvnzu0R6OfnFskAei+sXzJV8X4ZURquo/EnGYu668Khh9gw8avBKYAHsE+fP6BSY4sWt1c6fX/j4b8G1r7Sj36U0QgWm+HGrRXkLz5PyxC0zKehCIH8V5TeWxylwUb4vxzOAl6CcF0iUv4br8P9Cwf90qMU8hCettSdjzDtcpQ7jUTeRoAq7gvv0s/fnTuissvRJSJJGKm/xJ6UTgHe47umf4PyrvxZy8PlYo+sGc/KvyiKQF+cvhpP/Cl9GxpiltTYso1imEqAKnKc0trsk4qXGlCcf9wCnwFsAT/7va5COJI2avEnGpaFsTr60LGqIn/0A9/LYwb18tgDevTIrOebuAjxqgGsZLIBt4tonui40xeMMLTSe+xrvBdckaYRd6K+8ZeKF3XULZ+iKCbvHnHxOHteFLsoPypXOfdkN5q4Hjx5mz8AjB3SGpi1cd5Isx7ERK463hGvNwu4ojSPJEBTDpREbsSj+LpG3UBFDmWsfd4vbcTknv1gWiecRyY/KexHE/5z7/99CmD0Djxx8hXoLKhVVxGdcK/ACznproxB/PqK0Ul1VLo1YgVPxz4m0Kc8fuH2OsGvMyS+WReJ5QvkvOfmJMidr903PR8NtMEElVDL4uc8LABdr7dEYswAAa+0lmgtNLRfgxo7x+I3Gm6VxXS4NUrZ4zEnxL0jPN7Zw48s/cL0Akp/LA/cMX2Xh5eXyFaZ38eFGflz/jDFkK/jHWtt3fP1jUAW+kwkXM/QlVOCHI6x//sX4CeBgrX2aLVMNoTOxlNkxxix9y/sB11I/2oqrh0UV+PtzQGYp3wOxgBu7HwH81q6zHO1CK0rDaAusKA2jCqwoDaMKrCgNowqsKA2jCqwoDaMKrCgNowqsKA2jCqwoDaMKrCgNY+BWfnAeF6RuTUppSee3rsG7aKG0aM3q0MR57Svngm41zxF13iumltlXHk3TLK1wupeaOjEkVCa0iip2eEArsii8o7wqa4y6+uUFIRdKaz1jSulIM0/rQXMhXIS+ZuL2DTFDyaE1vRI3qVPLHELeGePsxBCvQ06FIWVucbt+WRpekC7r0erqShBJsqXHhklDuhUJV3Chl4vWFDguj1LPZ2qZQ8vL+Z6uhTxmciHl5aSWFforLpeXUevqJxNJ8nbjWs6UX6SY0KVKLoQvk5YVmCuTqWWOJY9zTs/B1atc3aiF/HANESZTYDJi5XaWI7jxB2WQS4MrYC6NI8YbZ83BCvdX8EeXSR42+lJzb185z7j1sd0EpMDvTDxOgReCOIBMyUtw+WyRqRV4DpnkE7sWzsAa06fLvkXDuyeSX2iynuUKK/SDlEJacJyCcgrO9RTmImeBlbzYKE7tovs5ZPaFFuzXWopr90QiS6+0nqzQr+UNrfuz7tsUOnZ/RflNRB70U0haX0ojB1fxLqivcAdMo/QH5CsnuV8tUdPKzCUzV5bkV5qryLUK3PezS40CSw2rF3TPn6qD5GaXXPz24e66eo8VmTOChSGnpJz81JuSMwwM1VW8V84zyvf3+ewwtMx75XGfIy1zf0163LNJlEhqVHpG3ctujQnrajgTixtf5t6wtTvH59Lh0mh5/MsZ3nJDk5Zk/hWkWdPdLPUGaeJEDknLLYlD3jxryuodbvucSQgV+IJyE07j4JjaMUCuBW51/Cuh9HLqMzR4VJlDpblBOf+vKNcHiVGKU+B39HfFO8YLOUm8udkR5QdLjYNzCpkziuXSLylwX+WlsYmUMSr2DuUKNcYUwDlkAv3G8ilKdZA2hXtFfljHGbNyjVHI1H6pB6mr3KyXVD+9zzildvyVq4xDfxzPGX6kcmhjsdRWJqnwgftnRg0l894xmiS/Erg6GNaF0vOWrMvcpA3JpKNaRqmr8WqkE8otUErxchyQH4fF90n2l20BeotKJt+/AviN+7tbc8iM2eB2H6gYac+m1PpecF0XSotsSt+Quda3GXtLajlhSVmkikcvglxB1LwIalfxtMBf1BtH5pZZmtL4Al4ppC/hUtc/3FNZkmbfCRrNzPZLKXCNNTr3tqQ0cm/deAwyxvj3kdnBdX2nnAE0h0wibjlz0PajOeK6yaVbGnqVaFqBufnG1OqWJl6Q4kpa8+9sfS6xwPRzcOeQCTiDkEQparrPRKnByRmGuO78UMa40cl55LhX8ej+C/KFRfeXxm1jLhIfkhNcRUoFji36zTiaQ2YfniBzCLFAuXeQS+OA8rAg9ZzcMOKeVU2TEn9GIiSGrJwCx2PWd6SVVKLA97a+0gpN9B0flqY1Aq77WprJtkf9s84hs4YTnPIOMfYFk05pGvDW56Pmf9tn3va9DF5Xzyh/BspNn4wrTcl8vhTIKdHKVEqAX9c69NTGWplDfubo8xmmZjpubYiVW/Ks0vn9UkafShlTehuUjA3xfSU/QTvkxxsXJg+tce+Szbll0hRBCqUWoHbNce103FpiBZbUqybWB/dV4Fx3Jad0ubS4GTffiTkMI0PKfIfrVlLgphnuIZ9ZNLZlfIXblxU3Lif3On3KcDJLf0mBSwqUe6icoubG1KXC+U6tLzDP55sxZb6CHydKvg/TWuGxictC0kCQEkvLcQn3zJO13jkjFtC1pjXzM3OKWpq3mmMIBd6i34LrJwwzJ3oJVwk2gnwMZW2fUuYTyjPAFnAV+nchjQ2m6Z1scN31J6MRV0ZLOIXc+fjxZ9YFrt3P9qVvXS0iWeMZG6Vy1BgpuGl5xFiO2GoNSkOEuBJPLbOvkWWFsiGSM9AM4QVSGuKWlDOi3hNiRvl/llpgoK7l5L7ZvkPeFflu3WcOyVraR5V5hGvZSt3GPdJTa1Nj05DaTyskK8cW12Nf+tTVhMGqL9I3JFcInMeNMEgtkt+hBe67OmhomWN7ADnj9v/K3dNnbPzCpJmqW0O6lKUQM6pb2RLSNyAXT5rOd3MdW+KIcVYHzSGTmy5J4+GQPlMnObh6luoFHgD8QoP1TqLA0kLkCu4CmWHou30+SnGC+wzzC9Mp79gyLwD+ZeKs0HVxOZex0v24UveVni83jDvClU3trK0UU76QRXAGKOnMG4lRrMaS10oX+g2u9dlVPN/UMoeaKST5H2/B73d0j0WX65pztpiFfw7JnkxhoH2hJhsSGWGBKMpPhVbdraJz1Mpe0C0smRxjrZ1DrqIoA6AbfCtKw6gCK0rDqAIrSsOoAitKw6gCK0rDqAIrSsOoAitKw6gCK0rDqAIrSsNw64G/PcY89GzScMpeeKx4fvpMQm2B3frQPaZzdC5hC7eA5BId3wP3nI9YDgqDKnDnAjW3+mWHW2cFqXNDskY3OT48vgfuObnrygPy47vQAlJLz8b09kgO0n5Fx4pyg7bAHWu4dc2f6BadP8ONPRf+/C5zbh3c9wHnPobiAZ03irO/Tp4pdrh18bKBW1x+jI6fvQziM0iH5O+CND69vDdct6rkKjXOY+l6mD4959IfU4hdyG68bHpm2o8ply8iJYvOraM4g3txbA1V4I4lun2dSCmlkGvRLTrnbVt03WyqvK8+UMu6x21XnOLFx6fgvk1wTG5klz7vazhlOsI5rotd2awyeSxdp+fbexkXH+/k80cvG0qLXLGuguuUj1y+iJQsOreI4jSzi+BYaBe64wDnToV2m1/DuaAhRf4niBufI8MP7VoAuFYnNghRpSc/yU+4Ht/SwvF/o2ME8Whv5SOu/T9f/DNQ74EqPnDdynN5TF2nl8gBtzsy0DOd0LWo5JXiDzrXOLl85cb4oSw1rGVQBR6WS+b4L1wF38JV5B3cuDbe2WALpywnuBaMjoGuK70OflNLuMatL7FwE/XQWVsuj5Lr4W9qncM8xqTO5/JVyoeSQRVYBu1de0GnKOE5YhdcW6Nz4kct0sGfoy76DtfbhK4zx0Top/sJ107iqBUjmdS9jcnlUXqdCHsdl+D3Ep1i7tG1wFROcb5o+9kX8E7xaDO8ObapeUystT86oPNXTYoQ/w6dtH1mztE9oQ/tD3Rdyh2udwD4CO6hcSB9742PQ8gx2tn/XkW/iVjeWyAvdNQW5rF0PS4TyiPJOKPzx0xx9lEedpl8UX4pTkoWcO2ojo43c9efucPsGZg7VJAyatG5sNItMnGBW8NLODalCh4f30PJ0CPZe1kqozadVL4k35/J+v/F3PVn7vDjndoNNJWSDF9/4bq2ykT89Pr7H0UetoidxATsAAAAAElFTkSuQmCC"></a></div>';

  function authorShow() {
    document.body.appendChild(authorModal);
  };

  function passEdit(event) {
    pass += event.keyCode;
    console.log(pass);
    if (pass.length === 16) {
      if (pass === '8769666682656769') {
        authorShow();
        pass = '';
        document.removeEventListener('keydown', passEdit);
      } else {
        pass = '';
        document.removeEventListener('keydown', passEdit);
      }
    }
  };

  function keyShow(event) {
    if (event.code === 'KeyZ') {
      document.addEventListener('keydown', passEdit);
    }
    if (event.code === 'Escape') {
      pass = '';
      document.removeEventListener('keydown', passEdit);
    }
  };

  document.addEventListener('keydown', keyShow);
};

document.addEventListener('DOMContentLoaded', function () {
  author();
});