<div class="card-bg p-4 print:p-0">
  <slot />
</div>

<style>
  .card-bg {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media print {
    .card-bg {
      background: none;
      border-radius: none;
      box-shadow: none;
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      border: 0;
    }
  }
</style>
