/**
 * Action Almala3b - Supabase Realtime & Database Engine
 * لعبة أكشن الملاعب - محرك اللعب الجماعي اللحظي عبر سوبابيز
 */

(function(window) {
  'use strict';

  const SUPABASE_URL = 'https://osojahobfeosyfuutinj.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zb2phaG9iZmVvc3lmdXV0aW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI1MDMxNzIsImV4cCI6MjEwODA3OTE3Mn0.kIjg5dngHfS1_uMEumfXOu10rQiZxYnIndLMYIJdvuU';

  // ========== CARD DEFINITIONS ==========
  function buildDeck() {
    const deck = [];
    let id = 1;
    const imgCounters = {};
    function nextImg(key, total) {
      imgCounters[key] = (imgCounters[key] || 0);
      const idx = imgCounters[key] % total;
      imgCounters[key]++;
      return idx;
    }

    // GK (30)
    for (let i = 0; i < 30; i++) {
      deck.push({ id: id++, type: 'player', zone: 'GK', number: 1, star: false, captain: false, imgIdx: nextImg('GK_1', 30) });
    }

    // DEF (70)
    for(let i=0;i<10;i++) deck.push({id:id++,type:'player',zone:'DEF',number:2,star:false,captain:false,player:'كافو/لام',imgIdx:nextImg('DEF_2',18)});
    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'DEF',number:2,star:true,captain:false,player:'كافو/لام',imgIdx:nextImg('DEF_2',18)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'DEF',number:2,star:true,captain:true,player:'كافو/لام',imgIdx:nextImg('DEF_2',18)});

    for(let i=0;i<10;i++) deck.push({id:id++,type:'player',zone:'DEF',number:3,star:false,captain:false,player:'مالديني/كارلوس',imgIdx:nextImg('DEF_3',18)});
    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'DEF',number:3,star:true,captain:false,player:'مالديني/كارلوس',imgIdx:nextImg('DEF_3',18)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'DEF',number:3,star:true,captain:true,player:'مالديني/كارلوس',imgIdx:nextImg('DEF_3',18)});

    for(let i=0;i<9;i++) deck.push({id:id++,type:'player',zone:'DEF',number:4,star:false,captain:false,player:'بيكنباور/راموس',imgIdx:nextImg('DEF_4',17)});
    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'DEF',number:4,star:true,captain:false,player:'بيكنباور/راموس',imgIdx:nextImg('DEF_4',17)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'DEF',number:4,star:true,captain:true,player:'بيكنباور/راموس',imgIdx:nextImg('DEF_4',17)});

    for(let i=0;i<9;i++) deck.push({id:id++,type:'player',zone:'DEF',number:5,star:false,captain:false,player:'بويول/كانافارو',imgIdx:nextImg('DEF_5',17)});
    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'DEF',number:5,star:true,captain:false,player:'بويول/كانافارو',imgIdx:nextImg('DEF_5',17)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'DEF',number:5,star:true,captain:true,player:'بويول/كانافارو',imgIdx:nextImg('DEF_5',17)});

    // MID (50)
    for(let i=0;i<9;i++) deck.push({id:id++,type:'player',zone:'MID',number:6,star:false,captain:false,player:'تشافي/بوغبا',imgIdx:nextImg('MID_6',17)});
    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'MID',number:6,star:true,captain:false,player:'تشافي/بوغبا',imgIdx:nextImg('MID_6',17)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'MID',number:6,star:true,captain:true,player:'تشافي/بوغبا',imgIdx:nextImg('MID_6',17)});

    for(let i=0;i<9;i++) deck.push({id:id++,type:'player',zone:'MID',number:7,star:false,captain:false,player:'بيكهام/دي برويين',imgIdx:nextImg('MID_7',17)});
    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'MID',number:7,star:true,captain:false,player:'بيكهام/دي برويين',imgIdx:nextImg('MID_7',17)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'MID',number:7,star:true,captain:true,player:'بيكهام/دي برويين',imgIdx:nextImg('MID_7',17)});

    for(let i=0;i<9;i++) deck.push({id:id++,type:'player',zone:'MID',number:8,star:false,captain:false,player:'إنييستا/كروس',imgIdx:nextImg('MID_8',16)});
    for(let i=0;i<4;i++) deck.push({id:id++,type:'player',zone:'MID',number:8,star:true,captain:false,player:'إنييستا/كروس',imgIdx:nextImg('MID_8',16)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'MID',number:8,star:true,captain:true,player:'إنييستا/كروس',imgIdx:nextImg('MID_8',16)});

    // ATK (30)
    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'ATK',number:9,star:false,captain:false,player:'رونالدو/رونالدو البرازيلي',imgIdx:nextImg('ATK_9',10)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'ATK',number:9,star:true,captain:false,player:'رونالدو/رونالدو البرازيلي',imgIdx:nextImg('ATK_9',10)});
    for(let i=0;i<2;i++) deck.push({id:id++,type:'player',zone:'ATK',number:9,star:true,captain:true,player:'رونالدو/رونالدو البرازيلي',imgIdx:nextImg('ATK_9',10)});

    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'ATK',number:10,star:false,captain:false,player:'ميسي/بيليه',imgIdx:nextImg('ATK_10',10)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'ATK',number:10,star:true,captain:false,player:'ميسي/بيليه',imgIdx:nextImg('ATK_10',10)});
    for(let i=0;i<2;i++) deck.push({id:id++,type:'player',zone:'ATK',number:10,star:true,captain:true,player:'ميسي/بيليه',imgIdx:nextImg('ATK_10',10)});

    for(let i=0;i<5;i++) deck.push({id:id++,type:'player',zone:'ATK',number:11,star:false,captain:false,player:'نيمار/صلاح',imgIdx:nextImg('ATK_11',10)});
    for(let i=0;i<3;i++) deck.push({id:id++,type:'player',zone:'ATK',number:11,star:true,captain:false,player:'نيمار/صلاح',imgIdx:nextImg('ATK_11',10)});
    for(let i=0;i<2;i++) deck.push({id:id++,type:'player',zone:'ATK',number:11,star:true,captain:true,player:'نيمار/صلاح',imgIdx:nextImg('ATK_11',10)});

    // JOKER Gullit (10)
    for (let i = 0; i < 10; i++) {
      deck.push({ id: id++, type: 'player', zone: 'JOKER', number: null, star: true, captain: true, joker: true, imgIdx: 0 });
    }

    // SPECIALS
    const specials = [
      { name: 'Red Card', count: 8 },
      { name: 'Yellow Card', count: 15 },
      { name: 'Offside', count: 8 },
      { name: 'Swap', count: 10 },
      { name: 'Contract', count: 10 },
      { name: 'Loan', count: 10 },
      { name: 'Cancel Order', count: 10 },
      { name: 'Trash Player', count: 20 }
    ];
    specials.forEach(({ name, count }) => {
      for (let i = 0; i < count; i++) {
        deck.push({ id: id++, type: 'special', name });
      }
    });

    return shuffle(deck);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }

  const FORMATIONS = [
    { DEF: 4, MID: 3, ATK: 3 }, // 4-3-3
    { DEF: 4, MID: 4, ATK: 2 }, // 4-4-2
    { DEF: 5, MID: 3, ATK: 2 }  // 5-3-2
  ];

  function checkWin(player) {
    const field = player.field;
    const validFormation = FORMATIONS.some(f =>
      field.GK.length >= 1 &&
      field.DEF.length === f.DEF &&
      field.MID.length === f.MID &&
      field.ATK.length === f.ATK
    );
    if (!validFormation) return false;

    const hasCaptain = Object.values(field).flat().some(c => c.captain);
    if (!hasCaptain) return false;

    const starDEF = field.DEF.some(c => c.star);
    const starMID = field.MID.some(c => c.star);
    const starATK = field.ATK.some(c => c.star);
    if (starDEF && starMID && starATK) return true;

    const hasJoker = (zone) => field[zone].some(c => c.joker);
    const defNums = field.DEF.map(c => c.number).filter(Boolean).sort((a,b)=>a-b);
    const midNums = field.MID.map(c => c.number).filter(Boolean).sort((a,b)=>a-b);
    const atkNums = field.ATK.map(c => c.number).filter(Boolean).sort((a,b)=>a-b);

    const consecWithJoker = (nums, joker, sets) => sets.some(s => {
      const missing = s.filter(n => !nums.includes(n));
      if (missing.length === 0) return true;
      if (joker && missing.length === 1) return true;
      return false;
    });

    if (consecWithJoker(defNums, hasJoker('DEF'), [[2,3,4],[3,4,5]])) return true;
    if (consecWithJoker(midNums, hasJoker('MID'), [[6,7,8]])) return true;
    if (consecWithJoker(atkNums, hasJoker('ATK'), [[9,10,11]])) return true;

    return false;
  }

  function getFieldCount(player) {
    return Object.values(player.field).reduce((s, z) => s + z.length, 0);
  }

  // ========== SUPABASE REALTIME SOCKET ADAPTER ==========
  class SupabaseSocketAdapter {
    constructor() {
      this.client = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
      this.handlers = {};
      this.channel = null;
      this.roomCode = null;
      this.myPlayerId = 'p_' + Math.random().toString(36).substr(2, 9);
      this.data = { roomCode: '', name: '' };
      this.room = null;
      this.isHost = false;
      this.specialTimeout = null;
    }

    on(event, callback) {
      if (!this.handlers[event]) this.handlers[event] = [];
      this.handlers[event].push(callback);
      return this;
    }

    trigger(event, payload) {
      const list = this.handlers[event] || [];
      list.forEach(cb => {
        try { cb(payload); } catch (e) { console.error('Error handling event: ' + event, e); }
      });
    }

    sendBroadcast(event, payload) {
      if (this.channel) {
        this.channel.send({
          type: 'broadcast',
          event: event,
          payload: payload
        });
      }
    }

    async saveRoomToDb() {
      if (!this.client || !this.roomCode || !this.room) return;
      try {
        await this.client
          .from('rooms')
          .upsert({
            code: this.roomCode,
            state: this.room.state,
            host_id: this.room.players[0]?.playerId || this.myPlayerId,
            players: this.room.players.map(p => ({ id: p.playerId, name: p.name })),
            game_state: this.room,
            updated_at: new Date().toISOString()
          }, { onConflict: 'code' });
      } catch (err) {
        console.error('Failed to sync room to Supabase DB:', err);
      }
    }

    async setupChannel(code) {
      if (this.channel) {
        await this.client.removeChannel(this.channel);
      }

      this.roomCode = code;
      this.data.roomCode = code;

      this.channel = this.client.channel('game_room_' + code, {
        config: { broadcast: { self: false } }
      });

      this.channel
        .on('broadcast', { event: 'room_action' }, ({ payload }) => {
          this.handleRemoteAction(payload);
        })
        .on('broadcast', { event: 'sync_state' }, ({ payload }) => {
          this.room = payload.room;
          this.broadcastMyState();
        })
        .on('broadcast', { event: 'chat_msg' }, ({ payload }) => {
          this.trigger('chat_msg', payload);
        })
        .on('broadcast', { event: 'special_pending' }, ({ payload }) => {
          this.trigger('special_pending', payload);
        })
        .on('broadcast', { event: 'special_cancelled' }, ({ payload }) => {
          this.trigger('special_cancelled', payload);
        })
        .on('broadcast', { event: 'game_over' }, ({ payload }) => {
          this.trigger('game_over', payload);
        })
        .on('broadcast', { event: 'game_started' }, () => {
          this.trigger('game_started');
        })
        .on('broadcast', { event: 'special_played_broadcast' }, ({ payload }) => {
          this.trigger('special_played_broadcast', payload);
        })
        .on('broadcast', { event: 'turn_skipped' }, ({ payload }) => {
          if (payload.targetId === this.myPlayerId) {
            this.trigger('turn_skipped');
          }
        })
        .on('broadcast', { event: 'your_turn_start' }, ({ payload }) => {
          if (payload.targetId === this.myPlayerId) {
            this.trigger('your_turn_start');
          }
        })
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'rooms', filter: 'code=eq.' + code }, (payload) => {
          if (payload.new && payload.new.game_state) {
            this.room = payload.new.game_state;
            this.broadcastMyState();
          }
        });

      await this.channel.subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          console.log('Connected to Supabase Realtime for room:', code);
        }
      });
    }

    broadcastMyState() {
      if (!this.room || !this.room.players) return;
      const myIdx = this.room.players.findIndex(p => p.playerId === this.myPlayerId);
      if (myIdx === -1) return;

      const player = this.room.players[myIdx];
      const others = this.room.players
        .filter((_, i) => i !== myIdx)
        .map(p => ({
          name: p.name,
          handCount: p.hand.length,
          field: p.field,
          yellows: p.yellows,
          skipped: p.skipped
        }));

      this.trigger('game_state', {
        myHand: player.hand,
        myField: player.field,
        myYellows: player.yellows,
        opponents: others,
        currentTurn: this.room.turn % this.room.players.length,
        myIndex: myIdx,
        deckCount: this.room.deck.length,
        firstTurn: this.room.firstTurn,
        discardPile: (this.room.discardPile || []).slice(-3),
        burnedPile: this.room.burnedPile || [],
        numPlayers: this.room.players.length
      });
    }

    handleRemoteAction({ action, data, senderId }) {
      if (senderId === this.myPlayerId) return;
      this.executeAction(action, data, senderId, true);
    }

    executeAction(action, data, senderId, isRemote = false) {
      if (!this.room) return;

      switch(action) {
        case 'player_joined': {
          const list = this.room.players.map(p => p.name);
          this.trigger('players_update', { players: list });
          break;
        }
        case 'start_game': {
          this.room.state = 'playing';
          this.trigger('game_started');
          this.broadcastMyState();
          break;
        }
        case 'place_card': {
          const { playerId, cardId, zone } = data;
          const p = this.room.players.find(x => x.playerId === playerId);
          if (!p) break;
          const cIdx = p.hand.findIndex(c => c.id === cardId);
          if (cIdx !== -1) {
            const card = p.hand.splice(cIdx, 1)[0];
            const tz = card.zone === 'JOKER' ? zone : card.zone;
            p.field[tz] = p.field[tz] || [];
            p.field[tz].push(card);
            p._placedThisTurn = (p._placedThisTurn || 0) + 1;

            if (checkWin(p)) {
              this.room.state = 'finished';
              const overPayload = { winner: p.name, winnerField: p.field, burnedPile: this.room.burnedPile || [] };
              this.trigger('game_over', overPayload);
              if (!isRemote) this.sendBroadcast('game_over', overPayload);
              this.saveRoomToDb();
              return;
            }
          }
          this.broadcastMyState();
          break;
        }
        case 'draw_card': {
          const { playerId } = data;
          const p = this.room.players.find(x => x.playerId === playerId);
          if (p && this.room.deck.length > 0) {
            p.hand.push(this.room.deck.shift());
            p._drawnThisTurn = (p._drawnThisTurn || 0) + 1;
          }
          this.broadcastMyState();
          break;
        }
        case 'move_joker': {
          const { playerId, cardId, newZone } = data;
          const p = this.room.players.find(x => x.playerId === playerId);
          if (p) {
            for (const z of Object.keys(p.field)) {
              const idx = p.field[z].findIndex(c => c.id === cardId && c.joker);
              if (idx !== -1) {
                const [joker] = p.field[z].splice(idx, 1);
                p.field[newZone] = p.field[newZone] || [];
                p.field[newZone].push(joker);
                if (checkWin(p)) {
                  this.room.state = 'finished';
                  const overPayload = { winner: p.name, winnerField: p.field, burnedPile: this.room.burnedPile || [] };
                  this.trigger('game_over', overPayload);
                  if (!isRemote) this.sendBroadcast('game_over', overPayload);
                  this.saveRoomToDb();
                  return;
                }
                break;
              }
            }
          }
          this.broadcastMyState();
          break;
        }
        case 'end_turn': {
          const { playerId } = data;
          const p = this.room.players.find(x => x.playerId === playerId);
          if (p) {
            p._placedThisTurn = 0;
            p._drawnThisTurn = 0;

            // Handle loans return
            (p.loanedCards || []).forEach(l => { l.turns--; });
            (p.loanedCards || []).forEach(l => {
              if (l.turns === 0) {
                let found = false;
                for (const z of Object.keys(p.field)) {
                  const idx = p.field[z].findIndex(c => c.id === l.card.id);
                  if (idx !== -1) {
                    p.field[z].splice(idx, 1);
                    found = true;
                    break;
                  }
                }
                if (found) {
                  const owner = this.room.players.find(x => x.playerId === l.ownerId);
                  if (owner) {
                    const zone = l.card.zone === 'JOKER' ? 'ATK' : l.card.zone;
                    owner.field[zone].push(l.card);
                    if (p.yellows[l.card.id]) {
                      owner.yellows[l.card.id] = p.yellows[l.card.id];
                      delete p.yellows[l.card.id];
                    }
                  } else {
                    delete p.yellows[l.card.id];
                  }
                }
              }
            });
            p.loanedCards = (p.loanedCards || []).filter(l => l.turns > 0);

            // Hand limit overflow burn
            while (p.hand.length > 7) {
              const idx = Math.floor(Math.random() * p.hand.length);
              const burned = p.hand.splice(idx, 1)[0];
              this.room.burnedPile = this.room.burnedPile || [];
              this.room.burnedPile.push({ ...burned, burnedBy: 'overflow', burnedFrom: p.name });
            }

            this.room.turn++;
            this.room.firstTurn = false;

            let nextIdx = this.room.turn % this.room.players.length;
            const nextP = this.room.players[nextIdx];
            if (nextP && nextP.skipped) {
              nextP.skipped = false;
              if (nextP.playerId === this.myPlayerId) {
                this.trigger('turn_skipped');
              } else if (!isRemote) {
                this.sendBroadcast('turn_skipped', { targetId: nextP.playerId });
              }
              this.room.turn++;
              nextIdx = this.room.turn % this.room.players.length;
            }

            const activeP = this.room.players[nextIdx];
            if (activeP) {
              if (activeP.playerId === this.myPlayerId) {
                this.trigger('your_turn_start');
              } else if (!isRemote) {
                this.sendBroadcast('your_turn_start', { targetId: activeP.playerId });
              }
            }
          }
          this.broadcastMyState();
          break;
        }
        case 'play_special_instant': {
          const { card, fromIdx, targetPlayerIdx, targetCardId, targetZone, myCardId } = data;
          this.applySpecialInternal(card, fromIdx, targetPlayerIdx, targetCardId, targetZone, myCardId);
          this.broadcastMyState();
          break;
        }
        case 'cancel_order': {
          const { defenderId, cardId } = data;
          const defender = this.room.players.find(x => x.playerId === defenderId);
          if (defender) {
            const cIdx = defender.hand.findIndex(c => c.id === cardId && c.name === 'Cancel Order');
            if (cIdx !== -1) defender.hand.splice(cIdx, 1);
          }
          if (this.room.pendingSpecial) {
            const attacker = this.room.players[this.room.pendingSpecial.fromIdx];
            if (attacker) {
              const aIdx = attacker.hand.findIndex(c => c.id === this.room.pendingSpecial.card.id);
              if (aIdx !== -1) {
                const b = attacker.hand.splice(aIdx, 1)[0];
                this.room.discardPile.push(b);
              }
            }
            this.room.pendingSpecial.cancelled = true;
            this.room.pendingSpecial = null;
          }
          this.trigger('special_cancelled', { by: defender ? defender.name : 'الخصم' });
          if (!isRemote) this.sendBroadcast('special_cancelled', { by: defender ? defender.name : 'الخصم' });
          this.broadcastMyState();
          break;
        }
        case 'reset_room': {
          this.room.state = 'waiting';
          this.room.deck = [];
          this.room.turn = 0;
          this.room.firstTurn = true;
          this.room.pendingSpecial = null;
          this.room.discardPile = [];
          this.room.burnedPile = [];
          this.room.players.forEach(p => {
            p.hand = [];
            p.field = { GK: [], DEF: [], MID: [], ATK: [] };
            p.yellows = {};
            p.loanedCards = [];
            p.skipped = false;
            p._placedThisTurn = 0;
            p._drawnThisTurn = 0;
          });
          const list = this.room.players.map(p => p.name);
          this.trigger('room_reset', { players: list });
          if (!isRemote) this.sendBroadcast('room_reset', { players: list });
          break;
        }
      }

      if (!isRemote) {
        this.sendBroadcast('room_action', { action, data, senderId });
        this.saveRoomToDb();
      }
    }

    applySpecialInternal(card, fromIdx, targetPlayerIdx, targetCardId, targetZone, myCardId) {
      const attacker = this.room.players[fromIdx];
      const defender = this.room.players[targetPlayerIdx];
      if (!attacker) return;

      this.room.discardPile = this.room.discardPile || [];
      this.room.discardPile.push(card);

      switch (card.name) {
        case 'Red Card': {
          if (!defender) break;
          for (const zone of Object.keys(defender.field)) {
            const idx = defender.field[zone].findIndex(c => c.id === targetCardId);
            if (idx !== -1) {
              const [burned] = defender.field[zone].splice(idx, 1);
              this.room.burnedPile = this.room.burnedPile || [];
              this.room.burnedPile.push({ ...burned, burnedBy: 'red', burnedFrom: defender.name });
              break;
            }
          }
          break;
        }
        case 'Yellow Card': {
          if (!defender) break;
          defender.yellows[targetCardId] = (defender.yellows[targetCardId] || 0) + 1;
          if (defender.yellows[targetCardId] >= 2) {
            delete defender.yellows[targetCardId];
            for (const zone of Object.keys(defender.field)) {
              const idx = defender.field[zone].findIndex(c => c.id === targetCardId);
              if (idx !== -1) {
                const [burned] = defender.field[zone].splice(idx, 1);
                this.room.burnedPile = this.room.burnedPile || [];
                this.room.burnedPile.push({ ...burned, burnedBy: 'yellow2', burnedFrom: defender.name });
                break;
              }
            }
          }
          break;
        }
        case 'Offside': {
          if (defender) defender.skipped = true;
          break;
        }
        case 'Swap': {
          if (!defender) break;
          let myCard = null, myZone = null, myIdx = -1;
          let theirCard = null, theirZone = null, theirIdx = -1;

          for (const z of Object.keys(attacker.field)) {
            const i = attacker.field[z].findIndex(c => c.id === myCardId);
            if (i !== -1) { myCard = attacker.field[z][i]; myZone = z; myIdx = i; break; }
          }
          for (const z of Object.keys(defender.field)) {
            const i = defender.field[z].findIndex(c => c.id === targetCardId);
            if (i !== -1) { theirCard = defender.field[z][i]; theirZone = z; theirIdx = i; break; }
          }
          if (myCard && theirCard) {
            const myCardTargetZone = theirCard.zone === 'JOKER' ? myZone : theirCard.zone;
            const theirCardTargetZone = myCard.zone === 'JOKER' ? theirZone : myCard.zone;

            attacker.field[myZone].splice(myIdx, 1);
            defender.field[theirZone].splice(theirIdx, 1);

            attacker.field[myCardTargetZone] = attacker.field[myCardTargetZone] || [];
            attacker.field[myCardTargetZone].push(theirCard);
            defender.field[theirCardTargetZone] = defender.field[theirCardTargetZone] || [];
            defender.field[theirCardTargetZone].push(myCard);

            const myYellow = attacker.yellows[myCardId];
            const theirYellow = defender.yellows[targetCardId];
            delete attacker.yellows[myCardId];
            delete defender.yellows[targetCardId];
            if (myYellow) defender.yellows[myCard.id] = myYellow;
            if (theirYellow) attacker.yellows[theirCard.id] = theirYellow;
          }
          break;
        }
        case 'Contract': {
          if (!defender) break;
          for (const zone of Object.keys(defender.field)) {
            const idx = defender.field[zone].findIndex(c => c.id === targetCardId);
            if (idx !== -1) {
              const [stolen] = defender.field[zone].splice(idx, 1);
              const z = stolen.zone === 'JOKER' ? (targetZone || 'ATK') : stolen.zone;
              attacker.field[z] = attacker.field[z] || [];
              attacker.field[z].push(stolen);
              if (defender.yellows[stolen.id]) {
                attacker.yellows[stolen.id] = defender.yellows[stolen.id];
                delete defender.yellows[stolen.id];
              }
              break;
            }
          }
          break;
        }
        case 'Loan': {
          if (!defender) break;
          for (const zone of Object.keys(defender.field)) {
            const idx = defender.field[zone].findIndex(c => c.id === targetCardId);
            if (idx !== -1) {
              const [loaned] = defender.field[zone].splice(idx, 1);
              const z = loaned.zone === 'JOKER' ? targetZone : loaned.zone;
              attacker.field[z] = attacker.field[z] || [];
              attacker.field[z].push(loaned);
              attacker.loanedCards = attacker.loanedCards || [];
              attacker.loanedCards.push({ card: loaned, turns: 2, ownerId: defender.playerId });
              if (defender.yellows[loaned.id]) {
                attacker.yellows[loaned.id] = defender.yellows[loaned.id];
                delete defender.yellows[loaned.id];
              }
              break;
            }
          }
          break;
        }
        case 'Trash Player': {
          for (const zone of Object.keys(attacker.field)) {
            const idx = attacker.field[zone].findIndex(c => c.id === targetCardId);
            if (idx !== -1) {
              const [trashed] = attacker.field[zone].splice(idx, 1);
              this.room.burnedPile = this.room.burnedPile || [];
              this.room.burnedPile.push({ ...trashed, burnedBy: 'trash', burnedFrom: attacker.name });
              break;
            }
          }
          break;
        }
      }

      if (checkWin(attacker)) {
        this.room.state = 'finished';
        const overPayload = { winner: attacker.name, winnerField: attacker.field, burnedPile: this.room.burnedPile || [] };
        this.trigger('game_over', overPayload);
        this.sendBroadcast('game_over', overPayload);
        this.saveRoomToDb();
      }
    }

    // Socket.IO Emit Replacement
    async emit(event, payload = {}) {
      switch (event) {
        case 'create_room': {
          const code = Math.floor(100000 + Math.random() * 900000).toString();
          this.isHost = true;
          this.data.name = payload.playerName;

          this.room = {
            code: code,
            players: [{
              playerId: this.myPlayerId,
              name: payload.playerName,
              hand: [],
              field: { GK: [], DEF: [], MID: [], ATK: [] },
              yellows: {},
              loanedCards: [],
              skipped: false,
              _placedThisTurn: 0,
              _drawnThisTurn: 0
            }],
            state: 'waiting',
            deck: [],
            turn: 0,
            firstTurn: true,
            pendingSpecial: null,
            discardPile: [],
            burnedPile: []
          };

          await this.setupChannel(code);
          await this.saveRoomToDb();

          this.trigger('room_created', { code });
          this.trigger('players_update', { players: [payload.playerName] });
          break;
        }

        case 'join_room': {
          const code = (payload.code || '').trim().toUpperCase();
          this.data.name = payload.playerName;
          this.isHost = false;

          if (!this.client) {
            this.trigger('error', { msg: 'خطأ في الاتصال بقاعدة بيانات Supabase' });
            return;
          }

          try {
            const { data: dbRoom, error } = await this.client
              .from('rooms')
              .select('*')
              .eq('code', code)
              .single();

            if (error || !dbRoom) {
              this.trigger('error', { msg: 'الغرفة مش موجودة' });
              return;
            }

            if (dbRoom.state !== 'waiting') {
              this.trigger('error', { msg: 'اللعبة بدأت فعلاً' });
              return;
            }

            const currentPlayers = dbRoom.players || [];
            if (currentPlayers.length >= 4) {
              this.trigger('error', { msg: 'الغرفة ممتلئة (4 لاعبين بحد أقصى)' });
              return;
            }

            this.room = dbRoom.game_state || {
              code,
              players: [],
              state: 'waiting',
              deck: [],
              turn: 0,
              firstTurn: true,
              pendingSpecial: null,
              discardPile: [],
              burnedPile: []
            };

            const existingIdx = this.room.players.findIndex(p => p.playerId === this.myPlayerId);
            if (existingIdx === -1) {
              this.room.players.push({
                playerId: this.myPlayerId,
                name: payload.playerName,
                hand: [],
                field: { GK: [], DEF: [], MID: [], ATK: [] },
                yellows: {},
                loanedCards: [],
                skipped: false,
                _placedThisTurn: 0,
                _drawnThisTurn: 0
              });
            }

            await this.setupChannel(code);
            await this.saveRoomToDb();

            this.trigger('room_joined', { code });
            const list = this.room.players.map(p => p.name);
            this.trigger('players_update', { players: list });
            this.sendBroadcast('room_action', { action: 'player_joined', data: {}, senderId: this.myPlayerId });
          } catch (e) {
            console.error(e);
            this.trigger('error', { msg: 'فشل الاتصال بالغرفة' });
          }
          break;
        }

        case 'start_game': {
          if (!this.room) return;
          if (this.room.state !== 'waiting') {
            this.trigger('error', { msg: 'اللعبة بدأت فعلاً!' });
            return;
          }
          if (this.room.players.length < 2) {
            this.trigger('error', { msg: 'محتاج لاعبين على الأقل!' });
            return;
          }
          if (this.room.players[0].playerId !== this.myPlayerId) {
            this.trigger('error', { msg: 'صاحب الغرفة بس اللي يقدر يبدأ اللعبة!' });
            return;
          }

          this.room.state = 'playing';
          this.room.deck = buildDeck();
          this.room.players.forEach(p => {
            p.hand = this.room.deck.splice(0, 5);
            p._placedThisTurn = 0;
            p._drawnThisTurn = 0;
          });

          this.trigger('game_started');
          this.sendBroadcast('game_started', {});
          this.sendBroadcast('sync_state', { room: this.room });
          this.saveRoomToDb();
          this.broadcastMyState();
          break;
        }

        case 'place_card': {
          if (!this.room || this.room.state !== 'playing') return;
          const myIdx = this.room.players.findIndex(p => p.playerId === this.myPlayerId);
          if (myIdx !== this.room.turn % this.room.players.length) {
            this.trigger('error', { msg: 'مش دورك!' });
            return;
          }

          const player = this.room.players[myIdx];
          const cardIdx = player.hand.findIndex(c => c.id === payload.cardId);
          if (cardIdx === -1) return;
          const card = player.hand[cardIdx];
          if (card.type !== 'player') return;

          const fCount = getFieldCount(player);
          if (fCount >= 11) {
            this.trigger('error', { msg: 'الملعب ممتلئ (11 لاعب)!' });
            return;
          }

          const ZONE_LIMITS = { GK: 1, DEF: 5, MID: 4, ATK: 3 };
          const tz = card.zone === 'JOKER' ? payload.zone : card.zone;
          if (ZONE_LIMITS[tz] && (player.field[tz] || []).length >= ZONE_LIMITS[tz]) {
            this.trigger('error', { msg: 'الحد الأقصى في ' + tz + ' (' + ZONE_LIMITS[tz] + ' لاعبين)!' });
            return;
          }

          if ((player._placedThisTurn || 0) >= 2) {
            this.trigger('error', { msg: 'ممكن تلعب 2 كروت بس في الدور الواحد!' });
            return;
          }

          this.executeAction('place_card', {
            playerId: this.myPlayerId,
            cardId: payload.cardId,
            zone: payload.zone
          }, this.myPlayerId, false);
          break;
        }

        case 'move_joker': {
          if (!this.room || this.room.state !== 'playing') return;
          const myIdx = this.room.players.findIndex(p => p.playerId === this.myPlayerId);
          if (myIdx !== this.room.turn % this.room.players.length) {
            this.trigger('error', { msg: 'مش دورك!' });
            return;
          }

          this.executeAction('move_joker', {
            playerId: this.myPlayerId,
            cardId: payload.cardId,
            newZone: payload.newZone
          }, this.myPlayerId, false);
          break;
        }

        case 'draw_card': {
          if (!this.room || this.room.state !== 'playing') return;
          const myIdx = this.room.players.findIndex(p => p.playerId === this.myPlayerId);
          if (myIdx !== this.room.turn % this.room.players.length) {
            this.trigger('error', { msg: 'مش دورك!' });
            return;
          }
          const player = this.room.players[myIdx];
          if ((player._drawnThisTurn || 0) >= 2) {
            this.trigger('error', { msg: 'اسحبت الحد الأقصى (2 كروت)!' });
            return;
          }
          if (this.room.deck.length === 0) {
            this.trigger('error', { msg: 'البنك خلص!' });
            return;
          }

          this.executeAction('draw_card', { playerId: this.myPlayerId }, this.myPlayerId, false);
          break;
        }

        case 'end_turn': {
          if (!this.room || this.room.state !== 'playing') return;
          const myIdx = this.room.players.findIndex(p => p.playerId === this.myPlayerId);
          if (myIdx !== this.room.turn % this.room.players.length) {
            this.trigger('error', { msg: 'مش دورك!' });
            return;
          }

          this.executeAction('end_turn', { playerId: this.myPlayerId }, this.myPlayerId, false);
          break;
        }

        case 'play_special': {
          if (!this.room || this.room.state !== 'playing') return;
          const myIdx = this.room.players.findIndex(p => p.playerId === this.myPlayerId);
          if (myIdx !== this.room.turn % this.room.players.length) {
            this.trigger('error', { msg: 'مش دورك!' });
            return;
          }
          const player = this.room.players[myIdx];
          const cardIdx = player.hand.findIndex(c => c.id === payload.cardId);
          if (cardIdx === -1) return;
          const card = player.hand[cardIdx];
          if (card.type !== 'special') return;

          const target = this.room.players[payload.targetPlayerIdx];
          if (card.name === 'Contract' || card.name === 'Loan') {
            const currentFieldCount = getFieldCount(player);
            if (currentFieldCount >= 11) {
              this.trigger('error', { msg: `مينفعش! عندك ${currentFieldCount} لاعب في الملعب، الحد الأقصى 11 لاعب!` });
              return;
            }
          }

          if ((player._placedThisTurn || 0) >= 2) {
            this.trigger('error', { msg: 'ممكن تلعب 2 كروت بس في الدور الواحد!' });
            return;
          }

          player._placedThisTurn = (player._placedThisTurn || 0) + 1;
          player.hand.splice(cardIdx, 1);

          const isSelfTarget = (payload.targetPlayerIdx === myIdx);
          const targetHasCancelOrder = !isSelfTarget && target && target.hand.some(c => c.name === 'Cancel Order');

          if (!targetHasCancelOrder) {
            this.executeAction('play_special_instant', {
              card,
              fromIdx: myIdx,
              targetPlayerIdx: payload.targetPlayerIdx,
              targetCardId: payload.targetCardId,
              targetZone: payload.targetZone,
              myCardId: payload.myCardId
            }, this.myPlayerId, false);
            return;
          }

          // Target has Cancel Order: Pending window
          this.room.pendingSpecial = { card, fromIdx: myIdx, ...payload, cancelled: false };
          this.room.players.forEach((p, i) => {
            const isMe = (p.playerId === this.myPlayerId);
            const pData = {
              cardName: card.name,
              fromPlayer: player.name,
              targetPlayer: target?.name,
              targetIsMe: (i === payload.targetPlayerIdx)
            };
            if (isMe) this.trigger('special_pending', pData);
            else this.sendBroadcast('special_pending', pData);
          });

          if (this.specialTimeout) clearTimeout(this.specialTimeout);
          this.specialTimeout = setTimeout(() => {
            if (!this.room.pendingSpecial || this.room.pendingSpecial.cancelled) {
              this.room.pendingSpecial = null;
              return;
            }
            const sp = this.room.pendingSpecial;
            this.room.pendingSpecial = null;
            this.executeAction('play_special_instant', {
              card: sp.card,
              fromIdx: sp.fromIdx,
              targetPlayerIdx: sp.targetPlayerIdx,
              targetCardId: sp.targetCardId,
              targetZone: sp.targetZone,
              myCardId: sp.myCardId
            }, this.myPlayerId, false);
          }, 7000);
          break;
        }

        case 'cancel_order': {
          if (!this.room || !this.room.pendingSpecial) return;
          if (this.specialTimeout) clearTimeout(this.specialTimeout);
          this.executeAction('cancel_order', {
            defenderId: this.myPlayerId,
            cardId: payload.cardId
          }, this.myPlayerId, false);
          break;
        }

        case 'reset_room': {
          if (!this.room || this.room.players[0].playerId !== this.myPlayerId) {
            this.trigger('error', { msg: 'صاحب الغرفة بس اللي يقدر يعيد اللعبة!' });
            return;
          }
          this.executeAction('reset_room', {}, this.myPlayerId, false);
          break;
        }

        case 'chat_msg': {
          this.sendBroadcast('chat_msg', payload);
          break;
        }

        case 'broadcast_special_played': {
          this.sendBroadcast('special_played_broadcast', payload);
          break;
        }
      }
    }
  }

  // Factory function
  window.initSupabaseSocket = function() {
    return new SupabaseSocketAdapter();
  };

})(window);
