# Appendix B: Code and reproduction

## Source code

The simulator is implemented in Python using NumPy for numerical computation and Matplotlib for visualization. No dependencies beyond the standard scientific Python stack are required.

The full source code is available at:

**[github.com/BjornKennethHolmstrom/gae-governance-simulator](https://github.com/BjornKennethHolmstrom/gae-governance-simulator)**

The repository includes:
- `paper_i_single_node_feedback.py` — single-node scalar model (latency and signal fidelity demonstration)
- `paper_i_multinode_subsidiarity.py` — ten-node vector model (subsidiarity and the averaging problem)
- `README.md` — setup instructions and parameter documentation
- `/outputs` — pre-generated figures from the canonical parameter set

## Reproducing the results

With Python 3.8+ and NumPy/Matplotlib installed:

```bash
git clone https://github.com/BjornKennethHolmstrom/gae-governance-simulator
cd gae-governance-simulator
python paper_i_multinode_subsidiarity.py
```

The simulation is seeded for reproducibility (`numpy.random.default_rng(seed=7)`). Running with the default parameters reproduces the figures in this paper exactly.

## Modifying the parameters

The architectural parameters are defined at the top of each script and are intended to be varied. Changing `tau_A`, `sigma_A`, `K_A` and their Architecture B counterparts will produce different quantitative outputs while preserving the qualitative structural relationships — provided gain values remain below the stability ceiling for their respective latencies.

Setting `K_B` above approximately 0.5 for `tau_B = 2` will produce the oscillatory instability discussed in Part V. This behavior is intentional and informative: it demonstrates that the stability ceiling is a real constraint on distributed architectures as well as centralized ones.

## Contributing

Extensions, critiques, and applications to specific governance contexts are welcome. The repository is open source under MIT license.
