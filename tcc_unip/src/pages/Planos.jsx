import '../styles/planos.css'
import { Star } from 'lucide-react'


export default function Plans () {
    return(
        <section>
            <div className='pLayer'>
                <div className='pSeparator'>

                    {/* PLANO BLUE */}
                    <div className='pCard'>
                        <div className='pHeader'>
                            <div className='phTag'>
                                <p>BLUE</p>
                            </div>
                            <h2>Plano Blue</h2>
                            <div>
                                <p>A partir de:</p>
                                <div className='pValor'>
                                    <h6 className='mutedTag'>R$</h6>
                                    <h3>119,90</h3>
                                    <p className='mutedTag'>/mês</p>
                                </div>
                            </div>
                        </div>
                        <hr className='sep'></hr>
                        <div className='pBody'>
                            <ul className="pTemplate">
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem limites de horário
                                </li>
                                <li className="pDisabled">
                                    <svg className="chk" viewBox="0 0 16 16" fill="none">
                                        <circle cx="8" cy="8" r="7" stroke="var(--muted)" strokeWidth="1.2"></circle>
                                        <path d="M5 8h6" stroke="var(--muted)" strokeWidth="1.4" strokeLinecap="round"></path>
                                    </svg>
                                    <span>Acesso a todas as aulas coletivas</span>
                                </li>
                                <li className="pDisabled">
                                    <svg className="chk" viewBox="0 0 16 16" fill="none">
                                        <circle cx="8" cy="8" r="7" stroke="var(--muted)" strokeWidth="1.2"></circle>
                                        <path d="M5 8h6" stroke="var(--muted)" strokeWidth="1.4" strokeLinecap="round"></path>
                                    </svg>
                                    <span>Sem permissão para convidados</span>
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Taxa de matrícula de R$60,00
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Taxa de anuidade de R$99,90
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem fidelidade
                                </li>
                            </ul>
                            <button className="pButton">Escolher Blue</button>
                        </div>
                    </div>

                    {/* PLANO GOLD (destaque) */}
                    <div className='pCard favorite'>
                        <span className="pFeaturedBadge">Mais escolhido</span>
                        <div className='pHeader'>
                            <div className='pFavorite phTag'>
                                <Star size={12} fill="currentColor" strokeWidth={1} />
                                <p>GOLD</p>
                            </div>
                            <h2>Plano Gold</h2>
                            <div>
                                <p>A partir de:</p>
                                <div className='pValor'>
                                    <h6 className='mutedTag'>R$</h6>
                                    <h3>129,90</h3>
                                    <p className='mutedTag'>/mês</p>
                                </div>
                            </div>
                        </div>
                        <hr className='sep'></hr>
                        <div className='pBody'>
                            <ul className="pTemplate">
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem limites de horário
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Acesso a todas as aulas coletivas
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Até 5 convidados
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem taxa de matrícula
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem taxa de anuidade
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Fidelidade de 12 meses
                                </li>
                            </ul>
                            <button className="pButton pButtonFavorite">Escolher Gold</button>
                        </div>
                    </div>

                    {/* PLANO PLATINUM */}
                    <div className='pCard'>
                        <div className='pHeader'>
                            <div className='phTag'>
                                <p>PLATINUM</p>
                            </div>
                            <h2>Plano Platinum</h2>
                            <div>
                                <p>A partir de:</p>
                                <div className='pValor'>
                                    <h6 className='mutedTag'>R$</h6>
                                    <h3>149,90</h3>
                                    <p className='mutedTag'>/mês</p>
                                </div>
                            </div>
                        </div>
                        <hr className='sep'></hr>
                        <div className='pBody'>
                            <ul className="pTemplate">
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem limites de horário
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Acesso a todas as aulas coletivas
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Até 5 convidados
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem taxa de matrícula
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem taxa de anuidade
                                </li>
                                <li>
                                    <svg className="chk" viewBox="0 0 16 16" fill="var(--accent)">
                                        <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"></circle>
                                        <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    Sem fidelidade
                                </li>
                            </ul>
                            <button className="pButton">Escolher Platinum</button>
                        </div>
                    </div>

                </div>
                <p className='pContractInfo'>
                    Valores e condições válidos para novas matrículas, podendo variar conforme plano e unidade.
                    Sujeitos a alteração sem aviso prévio. As cortesias para convidados são válidas apenas no mês vigente e não são cumulativas.
                    Para mais informações, consulte os contratos ou fale com nosso atendimento.
                </p>
            </div>
        </section>
    )
}